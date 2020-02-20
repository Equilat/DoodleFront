import {DateReu} from './date-reu';
import {Sondage} from './sondage';
import {Utilisateur} from './utilisateur';
import {Reponse} from './reponse';
import {Reunion} from './reunion';

export class SondageDateLieu extends Sondage{

  private _meetingDates: DateReu[];
  private _places: string[];

  constructor(id: Number, webLink: string, users: Utilisateur[], meeting: Reunion, answers: Reponse[], meetingDates: DateReu[], places: string[]) {
    super(id, webLink, users, meeting, answers);
    this._meetingDates = meetingDates;
    this._places = places;
  }


  get meetingDates(): DateReu[] {
    return this._meetingDates;
  }

  set meetingDates(value: DateReu[]) {
    this._meetingDates = value;
  }
}
