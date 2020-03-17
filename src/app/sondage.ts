import {Utilisateur} from './utilisateur';
import {Reunion} from './reunion';
import {Reponse} from './reponse';

export class Sondage {

  private _id: Number;
  private _webLink: string;
  private _users: Utilisateur[];
  private _meeting: Reunion;
  private _answers: Reponse[];
  private _dates: String[];
  private _lieux: String[];

  constructor(id: Number, webLink: string, users: Utilisateur[], meeting: Reunion, answers: Reponse[], dates: String[], lieux: String[]) {
    this._id = id;
    this._webLink = webLink;
    this._users = users;
    this._meeting = meeting;
    this._answers = answers;
    this._dates = dates;
    this._lieux = lieux;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get webLink(): string {
    return this._webLink;
  }

  set webLink(value: string) {
    this._webLink = value;
  }

  get users(): Utilisateur[] {
    return this._users;
  }

  set users(value: Utilisateur[]) {
    this._users = value;
  }

  get meeting(): Reunion {
    return this._meeting;
  }

  set meeting(value: Reunion) {
    this._meeting = value;
  }

  get answers(): Reponse[] {
    return this._answers;
  }

  set answers(value: Reponse[]) {
    this._answers = value;
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
