import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';
@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent {

  user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

}
