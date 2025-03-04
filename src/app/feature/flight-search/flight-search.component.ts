import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent implements OnInit {
  cardData = [
    {
      title: 'Indigo',
      seat_left: '2',
      flight_img: '../../../assets/svgs/la_plane.svg',
    },
    {
      title: 'Spicejet',
      seat_left: '6',
      flight_img: '../../../assets/svgs/la_plane.svg',
    },
    {
      title: 'Indigo',
      seat_left: '8',
      flight_img: '../../../assets/svgs/la_plane.svg',
    },
    {
      title: 'Spicejet',
      seat_left: '25',
      flight_img: '../../../assets/svgs/la_plane.svg',
    },
    {
      title: 'Indigo',
      seat_left: '19',
      flight_img: '../../../assets/svgs/la_plane.svg',
    },
  ];
  ngOnInit(): void {}
}
