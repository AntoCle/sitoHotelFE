export interface Utente {
    nome: String;
    cognome: String;
    data_di_nascita: Date;
    numero_telefono: number;
    email: String;

    data_creazione: Date;
    data_ultima_modifica: Date;
    versione: number;
}
