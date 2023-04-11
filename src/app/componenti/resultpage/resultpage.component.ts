import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { Hotel } from 'src/app/models/hotel';
import { HotelserviceService } from 'src/app/services/hotelservice.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss']
})
export class ResultpageComponent implements OnInit {

  @Input('nomeHotel') nomeHotel: string = "";
  hotels: Hotel[] = []   //creo un array di hotel vuoto

  constructor(private hotelService: HotelserviceService, private router: Router) {  //inietto il service di hotel
  }
  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getAll().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
  getRandomImage(): string {
    const urls = [
      'https://static1.bigstockphoto.com/8/0/1/large1500/1085043.jpg',
      'https://media.gettyimages.com/id/907633960/it/foto/ingresso-alla-hall-con-reception-e-area-lounge.jpg?s=612x612&w=gi&k=20&c=HssL8MhViztCY5Ut7CNExnzLTEEgDRkHQIiRgfD4qIc=',
      'https://media.gettyimages.com/id/1077111606/it/foto/lussuosa-hall-dellhotel-a-cinque-stelle.jpg?s=612x612&w=gi&k=20&c=PdPjzXFB9Ku7GX6nT7juiRzzFqJqENvGaTReJpW8nPY='
    ];
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
  }
  onButtonClick() {
    this.router.navigate(['/prenotazione']);
  }
}
