import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../modele/user';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  tabUser :User[]=[];
  userSubscription: Subscription = new Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.tabUser = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }


}
