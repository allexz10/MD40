import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserQuery, User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  @Input()
  user?: User;

  @Output()
  editUserEvent = new EventEmitter<AddUserQuery>()

  editUserForm: FormGroup = new FormGroup({});

  countries = [
    {
      title: "Latvia",
      code: "lv"
    },
    {
      title: "Lithuania",
      code: "lt"
    },
    {
      title: "Estonia",
      code: "ee"
    },

  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.pathcForm();
  }

  buildForm(): void {
    this.editUserForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      surname: ["", [Validators.required, Validators.minLength(3)]],
      country: ["", [Validators.required]]
    })
  }

  pathcForm(): void {
    this.editUserForm.patchValue({
      name: this.user?.name,
      surname: this.user?.surname,
      country: this.user?.country,
      id: this.user?.id
    })
  }

  editUser(): void {
    this.editUserEvent.emit(this.editUserForm.value);
  }
}
