import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddUserQuery, User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

enum UsersPageViewType {
  LIST = 0,
  ADD = 1,
  EDIT = 2
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],  
})

export class UsersComponent implements OnInit, OnDestroy {

  users?: User[];
  user?: User;
  mode: UsersPageViewType = UsersPageViewType.LIST;
  usersPageViewType = UsersPageViewType;
  routeSubscription?: Subscription;



  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const param = paramMap.get('param');
      if (param === "new") {
        this.showAddNewUserForm();
      } else if (param) {
        this.showEditUserForm(param);
      }
      else {
        this.showUserList();
      }
    })

    this.users = this.usersService.getUsers()
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }

  addUser(query: AddUserQuery): void {
    this.users = this.usersService.addUser(query);
  }


  editUser(query: AddUserQuery, id?: string): void {
    if (id) {
      this.usersService.editUser(query, id)
    }

  }

  showAddNewUserForm(): void {
    this.mode = UsersPageViewType.ADD

  }

  showUserList(): void {
    this.mode = UsersPageViewType.LIST
  }

  showEditUserForm(id: string): void {
    this.mode = UsersPageViewType.EDIT
    this.user = this.usersService.getUser(id)
  }


}
