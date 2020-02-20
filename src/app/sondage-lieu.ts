import {Sondage} from './sondage';
import {Utilisateur} from './utilisateur';
import {Reponse} from './reponse';
import {Reunion} from './reunion';

export class SondageLieu extends Sondage{

  private _places: String[];


  constructor(id: Number, webLink: string, users: Utilisateur[], meeting: Reunion, answers: Reponse[], places: String[]) {
    super(id, webLink, users, meeting, answers);
    this._places = places;
  }


  get places(): String[] {
    return this._places;
  }

  set places(value: String[]) {
    this._places = value;
  }
}
