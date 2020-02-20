import {Utilisateur} from './utilisateur';
import {DateReu} from './date-reu';

export class Reponse {

  private _id: Number;
  private _user: Utilisateur;
  private _meetingDates: DateReu;
  private _place: string;

  constructor(id: Number, user: Utilisateur, meetingDates: DateReu, place: string) {
    this._id = id;
    this._user = user;
    this._meetingDates = meetingDates;
    this._place = place;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get user(): Utilisateur {
    return this._user;
  }

  set user(value: Utilisateur) {
    this._user = value;
  }

  get meetingDates(): DateReu {
    return this._meetingDates;
  }

  set meetingDates(value: DateReu) {
    this._meetingDates = value;
  }

  get place(): string {
    return this._place;
  }

  set place(value: string) {
    this._place = value;
  }
}
