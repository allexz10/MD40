import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/shared/services/users.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  constructor(private usersService: UsersService) { }

  @Input()
  users?: User[]; 

  faEdit= faEdit;
  faTrash = faTrash

  tableHeadTitles = [
    "ID",
    "Name",
    "Surname",
    "Country",
    "Edit",
    "Remove"
  ]

  removeUser(id:string):void{ 
    this.users = this.usersService.removeUser(id)
  }
  

}
