import { Component, OnInit } from '@angular/core';
import { AddUserQuery, User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users?: User[];

  showForm = false;
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers()
  }

  addUser(query: AddUserQuery): void {
    this.users = this.usersService.addUser(query)
  }

  toggleShowForm(){
    this.showForm = !this.showForm
  }

}
