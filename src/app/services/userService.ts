import { User } from "../modele/user";
import { Subject } from "rxjs";
import { NgModule } from "@angular/core";


export class UserService {
    private users: User[] = [

    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
      this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
      this.users.push(user);
      this.emitUsers();
    }

    suppUser(){
     this.users=[];
    }
  }