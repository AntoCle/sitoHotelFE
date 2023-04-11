import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prenotazioneHotel';
  isResultpage = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    // verifica se il percorso corrente corrisponde al percorso di resultpage
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isResultpage = event.url === '/resultpage';
      }
    });
  }
}