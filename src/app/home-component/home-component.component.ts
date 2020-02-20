import { Component, OnInit } from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';
import {Utilisateur} from '../utilisateur';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  private utilisateurs: Utilisateur[];

  constructor(private doodleApiService: DoodleApiService) { }

  dateFormSelected: boolean;
  siteFormSelected: boolean;
  routerLinkEnabled: boolean;
  route: String;


  ngOnInit() {
  }

  getAllUtilisateurs() {
    this.doodleApiService.getListUtilisateurs().subscribe(result => { console.log(result);  this.utilisateurs = result; });
    console.log('Les utilisateurs récupérés depuis le back : ', this.utilisateurs);

  }

  isChecked(event) {

    if (event.target.value === 'dateForm') {
      this.dateFormSelected = event.target.checked;
    } else if (event.target.value === 'siteForm') {
      this.siteFormSelected = event.target.checked;
    }

    if (this.dateFormSelected && this.siteFormSelected) {
      this.routerLinkEnabled = true;
      this.route = '/generateDateSiteForm';
    } else if (this.siteFormSelected) {
      this.routerLinkEnabled = true;
      this.route = '/generateSiteForm';
    } else if (this.dateFormSelected) {
      this.routerLinkEnabled = true;
      this.route = '/generateDateForm';
    } else {
      this.routerLinkEnabled = false;
    }
  }

}
