export class Utilisateur {

  private _mail: String;
  private _nom: string;
  private _prenom: string;
  private _sondages: string[];
  private _prefsAlimentaires: string[];

  get mail(): String {
    return this._mail;
  }

  set mail(value: String) {
    this._mail = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get sondages(): string[] {
    return this._sondages;
  }

  set sondages(value: string[]) {
    this._sondages = value;
  }

  get prefsAlimentaires(): string[] {
    return this._prefsAlimentaires;
  }

  set prefsAlimentaires(value: string[]) {
    this._prefsAlimentaires = value;
  }
}
