import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/layout/header/header.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, LandingComponent, FooterComponent, SignUpComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'


})

export class AppComponent {
  title = 'KTT';
}
