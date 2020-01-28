import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Utilisateur} from './utilisateur';
import {map} from "rxjs/operators";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const DOODLE_API_URL = environment.doodleApiUrl;

@Injectable({
  providedIn: 'root'
})
export class DoodleApiService {


  constructor(private http: HttpClient) {
  }

// API: GET /users
  getListUtilisateurs(): Observable<Utilisateur[]> {
    console.log('retour du back : ', this.http.get(DOODLE_API_URL + '/users/'));
    // return this.http.get(DOODLE_API_URL + '/users')
    //   .map(response => {
    //     const utilisateurs = response.json());
    //     return utilisateurs.map((utilisateur) => new Utilisateur());
    //   })
    // .catch(this.handleError);
    return null;
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
