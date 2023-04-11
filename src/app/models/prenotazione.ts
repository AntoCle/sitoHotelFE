import { Camera } from "./camera";
import { Utente } from "./utente";

export interface Prenotazione {
    data_inizio: Date;
    data_fine: Date;

    utente: Utente;
    camera: Camera;

    data_creazione: Date;
    data_ultima_modifica: Date;
    versione: number;
    
}