import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  showPassword: boolean = false;

  signUpForm: any;

  name: string = '';
  email: string = '';
  password: string = '';
  number: any = '';

  emailPattern: any = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'; // Email regex pattern
  passwordPattern: any =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$';

  constructor(private formBuilder: FormBuilder) {}

  togglePassword() {
    console.log('clicked');

    this.showPassword = !this.showPassword;
  }

  login() {
    // Handle login logic here
    console.log('Login form submitted');
  }

  signup() {
    // Handle signup logic here
    console.log('Signup form submitted');
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({});
  }
}
