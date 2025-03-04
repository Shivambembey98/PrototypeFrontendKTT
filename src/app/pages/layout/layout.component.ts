import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../shared/layout/footer/footer.component";
import { LandingComponent } from "../landing/landing.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet, FooterComponent, LandingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
