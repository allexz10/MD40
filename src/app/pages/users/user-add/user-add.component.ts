import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AddUserQuery } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})

export class UserAddComponent implements OnInit {
  
  @Output()
  addUserEvent = new EventEmitter<AddUserQuery>();

  showCountrySelect = false;

  addUserForm: FormGroup = new FormGroup({});

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
  }

  buildForm(): void {
    this.addUserForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      surname: ["", [Validators.required, Validators.minLength(3)]],
      country: ["", [Validators.required]]
    })
  }

  addUser(): void {
    this.addUserEvent.emit(this.addUserForm.value)
    this.addUserForm.reset()
    this.showCountrySelect = false
  }
}
