import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contactForm = this.fb.group({
    firstName : ['', Validators.required] ,
    lastName :['',Validators.required] ,
    mail:['',Validators.required],
    comment:['',Validators.required]
    });



  constructor(private fb : FormBuilder) {
    this.fb.group;
   }

  ngOnInit(): void {
  }

}
