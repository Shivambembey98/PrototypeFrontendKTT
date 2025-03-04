import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/landing/landing.component').then(
            (c) => c.LandingComponent
          ),
      },

      {
        path: 'flight-search',
        loadComponent: () =>
          import('./feature/flight-search/flight-search.component').then(
            (c) => c.FlightSearchComponent
          ),
      },

      {
        path: 'flight-details',
        loadComponent: () =>
          import('./feature/flight-details/flight-details.component').then(
            (c) => c.FlightDetailsComponent
          ),
      },

      {
        path: 'passenger-details',
        loadComponent: () =>
          import('./pages/passenger-details/passenger-details.component').then(
            (c) => c.PassengerDetailsComponent
          ),
      },

      {
        path: 'register',
        loadComponent: () =>
          import('./auth/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'flight-summary',
        loadComponent: () =>
          import('./pages/flight-summary/flight-summary.component').then(
            (c) => c.FlightSummaryComponent
          ),
      },
    ],
  },
];
