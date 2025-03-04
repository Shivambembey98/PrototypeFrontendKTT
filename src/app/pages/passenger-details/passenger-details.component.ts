import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './passenger-details.component.html',
  styleUrl: './passenger-details.component.css',
})
export class PassengerDetailsComponent implements OnInit {
  ngOnInit(): void {}
}
