import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Prenotazione } from 'src/app/models/prenotazione';
import { PrenotazioneserviceService } from 'src/app/services/prenotazioneservice.service';
import { CameraserviceService } from 'src/app/services/cameraservice.service';
import { Camera } from 'src/app/models/camera';
import { UtenteserviceService } from 'src/app/services/utenteservice.service';
import { Utente } from 'src/app/models/utente';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.scss']
})
export class PrenotazioneComponent {
  prenotazioneForm: FormGroup;
  prenotazione!: Prenotazione;
  router: any;
  prenotazioneID: number = 0;
  idCamera: number = 0;
  idUtente: number = 0;
  camera!: Camera;
  utente!: Utente;
  email  : FormControl = new FormControl("");
  telefono  : FormControl = new FormControl("");

  constructor(private fb: FormBuilder, private prenotazioneserviceService: PrenotazioneserviceService,
    private cameraservice : CameraserviceService, private utenteservice : UtenteserviceService) {
    this.prenotazioneForm = this.fb.group({
      data_inizio: ['', Validators.required],
      data_fine: ['', Validators.required],
      camera: [this.camera, Validators.required],
      utente: [this.utente, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    
    });
  }
  postPrenotazione() {
    this.prenotazione = this.prenotazioneForm.value;
    this.prenotazione.camera = this.camera;
    this.prenotazione.utente = this.utente;
    this.prenotazione.data_ultima_modifica = new Date();
    this.prenotazione.versione = 1;
    //console.log("mostro il form della prenotazione: ", this.prenotazioneForm) // assegno i valori del form all'oggetto Prenotazione
    this.prenotazioneserviceService.create(this.prenotazione)
    .pipe(
      catchError((error) => {
        console.error('Qualcosa è andato storto', this.prenotazione, error);
        return of(null);
      })
    )
    .subscribe((ris) => {
      if (ris) {
        console.log('Prenotazione creata con successo');
        this.prenotazioneID = ris.id;
        alert("La tua prenotazione è stata creata con successo!");
      }
    });
  }
  getIdCamera() {
    this.cameraservice.get(this.idCamera).subscribe(cameraAggiornata => {
      this.camera = cameraAggiornata;
    });
  }
  getIdUtente() {
    this.utenteservice.get(this.idUtente).subscribe(utenteAggiornato => {
      this.utente = utenteAggiornato;
    });
  }
}