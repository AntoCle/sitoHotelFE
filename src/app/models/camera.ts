import { Hotel } from "./hotel";

export interface Camera {
    tipologia: String;
    numero_camera: number;
    costo: number;

    hotel: Hotel;

    data_creazione: Date;
    data_ultima_modifica: Date;
    versione: number;
}
