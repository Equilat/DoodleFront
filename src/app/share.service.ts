import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Sondage} from './sondage';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private messageSource = new BehaviorSubject(new Sondage(null, null, null, null, null, null, null));
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  changeMessage(message: Sondage) {
    this.messageSource.next(message);
  }
}
