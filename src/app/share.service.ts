// import { Injectable } from '@angular/core';
// import {BehaviorSubject} from 'rxjs';
// import {Sondage} from './sondage';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ShareService {
//
//   private messageSource = new BehaviorSubject('');
//   currentMessage = this.messageSource.asObservable();
//
//   constructor() { }
//
//   changeMessage(message: string) {
//     this.messageSource.next(message);
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShareService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
