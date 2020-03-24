export class Utilisateur {

  private mail: String;
  private nom: string;
  private prenom: string;
  private sondages: string[];
  private prefsAlimentaires: string[];

  constructor(mail: String, nom: string, prenom: string, sondages: string[], prefsAlimentaires: string[]) {
    this.mail = mail;
    this.nom = nom;
    this.prenom = prenom;
    this.sondages = sondages;
    this.prefsAlimentaires = prefsAlimentaires;
  }

  get Mail(): String {
    return this.mail;
  }

  set Mail(value: String) {
    this.mail = value;
  }

  get Nom(): string {
    return this.nom;
  }

  set Nom(value: string) {
    this.nom = value;
  }

  get Prenom(): string {
    return this.prenom;
  }

  set Prenom(value: string) {
    this.prenom = value;
  }

  get Pondages(): string[] {
    return this.sondages;
  }

  set Sondages(value: string[]) {
    this.sondages = value;
  }

  get PrefsAlimentaires(): string[] {
    return this.prefsAlimentaires;
  }

  set PrefsAlimentaires(value: string[]) {
    this.prefsAlimentaires = value;
  }
}
