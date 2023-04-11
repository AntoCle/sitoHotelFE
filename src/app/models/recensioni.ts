import { Hotel } from "./hotel";
import { Utente } from "./utente";

export interface Recensioni {

    recensione: String;
    numero_stelle: any;

    utente: Utente;
    hotel: Hotel;

    data_creazione: Date;
    data_ultima_modifica: Date;
    versione: number;
}
