import { Component } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSliderModule,
  ],
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.css',
})
export class FlightBookingComponent {

  // one way slider values
  onewayValue: number = 5;
  onewayOptions: Options = {
    floor: 1,
    ceil: 10,
    // showTicks: true,
    // showTicksValues: true;
    step: 1,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)', // Custom color function example
    getSelectionBarColor: () => 'var(--primary)', // Custom color function example
    // getTickColor: () => 'red',
    enforceRange: true,
    disabled: false,
    // tooltip: 'hover',
    // tooltipPlacement: 'top',
    // ariaLabel: 'Volume slider',
    // ariaLabelForRange: 'Volume range slider',
    // ariaValueText: (value: number) => `Volume is ${value}
    // translate: (value: number): string => {
    //   return '$' + value;
    // },
    // combineLabels: (minValue: string, maxValue: string): string => {
    //   return 'from ' + minValue + ' up to ' + maxValue;
    // }
  };

  onewayValue1: number = 1;
  onewayOptions1: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };

  onewayValue2: number = 4;
  onewayOptions2: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,

    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };

  // round trip slider value
  roundtripValue: number = 3;
  roundtripOptions: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  }

  roundtripValue1: number = 1;
  roundtripOptions1: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };

  roundtripValue2: number = 4;
  roundtripOptions2: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };

  // multi city slider value
  multicityValue: number = 3;
  multicityOptions: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  }

  multicityValue1: number = 1;
  multicityOptions1: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };

  multicityValue2: number = 4;
  multicityOptions2: Options = {
    floor: 1,
    ceil: 10,
    showSelectionBar: true,
    getPointerColor: () => 'var(--primary)',
    getSelectionBarColor: () => 'var(--primary)',
  };



  oneWayForm: boolean = true;
  roundTripForm: boolean = false;
  multiCityForm: boolean = false;
  groupFareForm: boolean = false;

  toggleOneWayTrip() {
    if (this.roundTripForm || this.multiCityForm || this.groupFareForm) {
      this.oneWayForm = true;
      this.roundTripForm = false;
      this.multiCityForm = false;
      this.groupFareForm = false;
    }
  }

  toggleRoundTrip() {
    if (this.oneWayForm || this.multiCityForm || this.groupFareForm) {
      this.roundTripForm = true;
      this.oneWayForm = false;
      this.multiCityForm = false;
      this.groupFareForm = false;
    }
  }

  toggleMultiCity() {
    if (this.oneWayForm || this.roundTripForm || this.groupFareForm) {
      this.multiCityForm = true;
      this.oneWayForm = false;
      this.roundTripForm = false;
      this.groupFareForm = false;
    }
  }

  toggleGroupFare() {
    if (this.oneWayForm || this.roundTripForm || this.multiCityForm) {
      this.groupFareForm = true;
      this.oneWayForm = false;
      this.roundTripForm = false;
      this.multiCityForm = false;
    }
  }

  handleSliderChange(value: any) {
    console.log('Value ->', value);
  }

  ngOnInit() {}
}
