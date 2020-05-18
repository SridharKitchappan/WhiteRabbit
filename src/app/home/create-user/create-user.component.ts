import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createuser;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createuser = this.fb.group({
      gender: ['', [Validators.required]],
      name: this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        first: ['', [Validators.required, Validators.minLength(3)]],
        last: [''],
      }),
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      dob: [''],
      phone: [''],
    });
  }

  get gender() {
    return this.createuser.get('gender');
  }
  get title() {
    return this.createuser.get('name.title');
  }
  get first() {
    return this.createuser.get('name.first');
  }
  get last() {
    return this.createuser.get('name.last');
  }
  get email() {
    return this.createuser.get('email');
  }
  get username() {
    return this.createuser.get('username');
  }
  get password() {
    return this.createuser.get('password');
  }
  get dob() {
    return this.createuser.get('dob');
  }
  get phone() {
    return this.createuser.get('phone');
  }

  submit(value) {
    console.log(value);
    let user = [];
    let userobj = {};
    user = JSON.parse(localStorage.getItem('userData'));
    userobj['user'] = value;
    user['results'].push(userobj);
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.createuser.reset();
    alert('User Successfully created!');
  }
}
