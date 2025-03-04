import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css'
})
export class FlightDetailsComponent {

}
