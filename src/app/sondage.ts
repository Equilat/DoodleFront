import {Utilisateur} from './utilisateur';
import {Reunion} from './reunion';
import {Reponse} from './reponse';

export class Sondage {

  private _id: Number;
  private _lienWeb: string;
  private _utilisateurs: Utilisateur[];
  private _reunion: Reunion;
  private _reponses: Reponse[];
  private _dates: String[];
  private _lieux: String[];

  constructor(id: Number, lienWeb: string, utilisateurs: Utilisateur[], reunion: Reunion, reponses: Reponse[], dates: String[], lieux: String[]) {
    this._id = id;
    this._lienWeb = lienWeb;
    this._utilisateurs = utilisateurs;
    this._reunion = reunion;
    this._reponses = reponses;
    this._dates = dates;
    this._lieux = lieux;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get lienWeb(): string {
    return this._lienWeb;
  }

  set lienWeb(value: string) {
    this._lienWeb = value;
  }

  get utilisateurs(): Utilisateur[] {
    return this._utilisateurs;
  }

  set utilisateurs(value: Utilisateur[]) {
    this._utilisateurs = value;
  }

  get reunion(): Reunion {
    return this._reunion;
  }

  set reunion(value: Reunion) {
    this._reunion = value;
  }

  get reponses(): Reponse[] {
    return this._reponses;
  }

  set reponses(value: Reponse[]) {
    this._reponses = value;
  }


  get dates(): String[] {
    return this._dates;
  }

  set dates(value: String[]) {
    this._dates = value;
  }

  get lieux(): String[] {
    return this._lieux;
  }

  set lieux(value: String[]) {
    this._lieux = value;
  }
}
