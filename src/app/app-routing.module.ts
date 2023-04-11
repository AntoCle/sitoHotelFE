import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { ResultpageComponent } from './componenti/resultpage/resultpage.component';
import { PrenotazioneComponent } from './componenti/prenotazione/prenotazione.component';
import { ListaprenotazioniComponent } from './componenti/listaprenotazioni/listaprenotazioni.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'resultpage', component: ResultpageComponent},
  {path: 'prenotazione', component: PrenotazioneComponent},
  {path: 'listaprenotazioni', component: ListaprenotazioniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
