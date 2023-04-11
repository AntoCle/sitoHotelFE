import { Component, OnInit } from '@angular/core';

interface Città {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  minDate = new Date(); // la data minima è quella odierna
  maxDate = new Date(2023, 11, 31); // la data massima è il 31 dicembre 2023
  startDate = '';
  endDate = '';

  constructor() { }

  ngOnInit(): void {
  }

  cittas: Città[] = [
    {value: 'città', viewValue: 'Roma'},
    {value: 'città', viewValue: 'Napoli'},
    {value: 'città', viewValue: 'Milano'},
  ];

}

