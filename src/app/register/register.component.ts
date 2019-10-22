import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../shared/fireauth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: FireauthService,
    private router: Router,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/student']);
    }, err => console.log(err)
    );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/student']);
    }, err => console.log(err)
    );
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
}
