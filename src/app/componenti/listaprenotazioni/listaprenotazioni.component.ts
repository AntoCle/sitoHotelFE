import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from 'src/app/models/prenotazione';
import { PrenotazioneserviceService } from 'src/app/services/prenotazioneservice.service';
import { Utente } from 'src/app/models/utente';
import { Camera } from 'src/app/models/camera';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.scss']
})
export class ListaprenotazioniComponent implements OnInit {

  @Input('nomePrenotazione') nomePrenotazione: string = "";
  prenotazioni: Prenotazione[] = []   //creo un array di prenotazione vuoto

  constructor(private prenotazioneService: PrenotazioneserviceService, private router: Router) {  //inietto il service di hotel
  }
  ngOnInit() {
    this.getPrenotazioni();
  }

  getPrenotazioni() {
    this.prenotazioneService.getAll().subscribe(prenotazioni => {
      this.prenotazioni = prenotazioni;
    });
  }
}