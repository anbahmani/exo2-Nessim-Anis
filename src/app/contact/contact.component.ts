import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modele/user';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm !: FormGroup;

  constructor(private fb : FormBuilder,private userService: UserService,private router: Router) {
   }

   ngOnInit(): void {
	this.initForm();
  }

   initForm() {
    this.contactForm = this.fb.group({
      firstName : ['', Validators.required] ,
      lastName :['',Validators.required] ,
      age :['',Validators.required] ,
      mail:['',[Validators.required,Validators.email]],
      comment:['',Validators.required]
      });
   }

   onSubmit() {
    const formValue = this.contactForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['age'],
      formValue['mail'],
      formValue['comment'],
    );

    alert("Le Formulaire est Valide");
    this.userService.suppUser();
    this.userService.addUser(newUser);
    this.router.navigate(['/accueil']);
	}

  hide:boolean = false;

  hideMail(values:any):void{
    this.hide = values.currentTarget.checked ;
    if(this.hide) {
      this.contactForm.removeControl('mail');
    } else {
      this.contactForm.addControl('mail',this.fb.control('', Validators.compose([Validators.required,Validators.email])));
    }
  }
}
