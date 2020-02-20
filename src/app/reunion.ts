import {DateReu} from './date-reu';

export class Reunion {

  private _id: Number;
  private _dateReuFixee: DateReu;
  private _intitule: string;
  private _resume: string;

  constructor(id: Number, dateReuFixee: DateReu, intitule: string, resume: string) {
    this._id = id;
    this._dateReuFixee = dateReuFixee;
    this._intitule = intitule;
    this._resume = resume;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get dateReuFixee(): DateReu {
    return this._dateReuFixee;
  }

  set dateReuFixee(value: DateReu) {
    this._dateReuFixee = value;
  }

  get intitule(): string {
    return this._intitule;
  }

  set intitule(value: string) {
    this._intitule = value;
  }

  get resume(): string {
    return this._resume;
  }

  set resume(value: string) {
    this._resume = value;
  }
}
