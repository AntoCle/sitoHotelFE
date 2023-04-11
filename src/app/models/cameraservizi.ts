import { Camera } from "./camera";
import { Servizi } from "./servizi";

export interface Cameraservizi {

    servizi: Servizi;
    camera: Camera;

    data_creazione: Date;
    data_ultima_modifica: Date;
    versione: number;
}
