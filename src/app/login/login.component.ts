import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;

  constructor(private fb: FormBuilder, private logindata: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3)]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(3)]]
    });
  }

  submit(value) {
    this.logindata.loginData().subscribe(data => {
      // foreach is to validate if we have more credientials in JSON file
      data.forEach(value1 => {
        if (value1.username === value.username && value1.password === value.password) {
          console.log('Credientials Valid');
          this.router.navigate(['/home']);
        } else {
          alert('Credientials InValid');
        }
      });
    });
  }

  get username() {
    return this.login.get('username');
  }
  get password() {
    return this.login.get('password');
  }

}
