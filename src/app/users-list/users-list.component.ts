import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/Service/user.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  result: any;

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {

    this.result= await this.userService.getUsers();
  }


  
}
