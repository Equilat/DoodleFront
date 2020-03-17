import {Utilisateur} from './utilisateur';
import {Reunion} from './reunion';
import {Reponse} from './reponse';

export class Sondage {

  constructor(id: Number, lienWeb: string, utilisateurs: Utilisateur[], reunion: Reunion, reponses: Reponse[], dates: String[], lieux: String[]) {
    this._id = id;
    this._lienWeb = lienWeb;
    this._utilisateurs = utilisateurs;
    this._reunion = reunion;
    this._reponses = reponses;
    this._dates = dates;
    this._lieux = lieux;
  }

  private _id: Number;

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  private _dType: String;

  get dType(): String {
    return this._dType;
  }

  set dType(value: String) {
    this._dType = value;
  }

  private _lienWeb: string;

  get lienWeb(): string {
    return this._lienWeb;
  }

  set lienWeb(value: string) {
    this._lienWeb = value;
  }

  private _utilisateurs: Utilisateur[];

  get utilisateurs(): Utilisateur[] {
    return this._utilisateurs;
  }

  set utilisateurs(value: Utilisateur[]) {
    this._utilisateurs = value;
  }

  private _reunion: Reunion;

  get reunion(): Reunion {
    return this._reunion;
  }

  set reunion(value: Reunion) {
    this._reunion = value;
  }

  private _reponses: Reponse[];

  get reponses(): Reponse[] {
    return this._reponses;
  }

  set reponses(value: Reponse[]) {
    this._reponses = value;
  }

  private _dates: String[];

  get dates(): String[] {
    return this._dates;
  }

  set dates(value: String[]) {
    this._dates = value;
  }

  private _lieux: String[];

  get lieux(): String[] {
    return this._lieux;
  }

  set lieux(value: String[]) {
    this._lieux = value;
  }
}
