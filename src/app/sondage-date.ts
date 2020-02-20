import {Sondage} from './sondage';
import {DateReu} from './date-reu';
import {Utilisateur} from './utilisateur';
import {Reunion} from './reunion';
import {Reponse} from './reponse';

export class SondageDate extends Sondage {

  private _meetingDates: DateReu[];


  constructor(id: Number, webLink: string, users: Utilisateur[], meeting: Reunion, answers: Reponse[], meetingDates: DateReu) {
    super(id, webLink, users, meeting, answers);
    this._meetingDates = meetingDates;
  }

  get meetingDates(): DateReu[] {
    return this._meetingDates;
  }

  set meetingDates(value: DateReu[]) {
    this._meetingDates = value;
  }

}
