import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Utilisateur} from './utilisateur';
import { map } from 'rxjs/operators';

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

// API: GET /users
  getListUtilisateurs(): Observable<Utilisateur[]> {
    // console.log('retour du back : ', this.http.get(DOODLE_API_URL + '/users/'));
    console.log('retour du back : ', this.http.get('/api'));
    console.log('retour du back : ', this.http.get('http://locahost:3000/rest/users'));
    // return this.http.get(DOODLE_API_URL + '/users')
    //   .map(response => {
    //     const utilisateurs = response.json());
    //     return utilisateurs.map((utilisateur) => new Utilisateur());
    //   })
    // .catch(this.handleError);
    // @ts-ignore
    return this.http.get('/api').pipe(map(res => { res.json(); }));
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
