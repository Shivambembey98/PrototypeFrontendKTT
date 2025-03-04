import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isEmailLogin: boolean = true;
  isMobileLogin: boolean = false;
  showPassword: boolean = false;

  togglePassword() {
    console.log('clicked');
    
    this.showPassword = !this.showPassword
  }

  toggleEmailLogin() {
    if (this.isMobileLogin) {
      this.isEmailLogin = true;
      this.isMobileLogin = !this.isMobileLogin;
    }
  }

  toggleMobileLogin() {
    if (this.isEmailLogin) {
      this.isMobileLogin = true;
      this.isEmailLogin = !this.isEmailLogin;
    }
  }
  ngOnInit(): void {}
}
