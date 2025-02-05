import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Utilisateur} from './utilisateur';
import {Sondage} from './sondage';
import {map} from 'rxjs/operators';
import {Reponse} from './reponse';

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
        item.lienWeb,
        item.utilisateurs,
        item.reunion,
        item.reponses,
        item.dates,
        item.lieux
      ))),
    );
  }

  getSondage(id: string): Observable<Sondage[]> {
    return this.http.get('api/survey/' + id).pipe(
      map((data: any[]) => data.map((item: any) => new Sondage(
        item.id,
        item.lienWeb,
        item.utilisateurs,
        item.reunion,
        item.reponses,
        item.dates,
        item.lieux
      ))),
    );
  }

// API : GET/answer
  getListReponses(): Observable<Reponse[]> {
    return this.http.get('/api/answer/all').pipe(
      map((data: any) => data.map((item: any) => new Reponse(
        item.id,
        item.user,
        item.meetingDate,
        item.place
      ))),
    );
  }

  public postSurvey(survey: Sondage) {
    console.log('le post : ', JSON.stringify(survey));
    var headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var dest = survey.DType;
    this.http.post(`/api/survey/${dest}`,
      JSON.stringify(survey), headers)
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body',
            val);
        },
        response => {
          console.log('POST call error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }

}
