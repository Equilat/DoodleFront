import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from './utilisateur';
import {Sondage} from './sondage';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// const DOODLE_API_URL = environment.doodleApiUrl;

@Injectable({
  providedIn: 'root'
})
export class DoodleApiService {


  constructor(private http: HttpClient) {
  }

// API: GET /user
  getListUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get('/api/user/all').pipe(
      map((data: any[]) => data.map((item: any) => new Utilisateur(
        item.mail,
        item.nom,
        item.prenom,
        null,
        null
      ))),
    );
  }

// API : GET/survey
  getListSondages(): Observable<Sondage[]> {
    return this.http.get('/api/survey/all').pipe(
      map((data: any[]) => data.map((item: any) => new Sondage(
        item.id,
        item.webLink,
        item.users,
        item.meeting,
        item.answers
      ))),
    );
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
