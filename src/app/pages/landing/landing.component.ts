import { Component, OnInit } from '@angular/core';
import { FlightBookingComponent } from '../../feature/flight-booking/flight-booking.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FlightBookingComponent, FooterComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {}
}
