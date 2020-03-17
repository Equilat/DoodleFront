import {Component, OnInit} from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';
import {Utilisateur} from '../utilisateur';
import {Sondage} from '../sondage';
import {ShareService} from '../share.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  dateFormSelected: boolean;
  siteFormSelected: boolean;
  routerLinkEnabled: boolean;
  route: String;
  sondage: Sondage;
  private utilisateurs: Utilisateur[];

  constructor(private router: Router, private doodleApiService: DoodleApiService, private shareService: ShareService) {
    this.sondage = new Sondage(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.shareService.currentMessage.subscribe(message => this.sondage = message);
  }

  getAllUtilisateurs() {
    this.doodleApiService.getListUtilisateurs().subscribe(result => {
      console.log(result);
      this.utilisateurs = result;
    });
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
      this.sondage.dType = 'dateLieu';
    } else if (this.siteFormSelected) {
      this.routerLinkEnabled = true;
      this.route = '/generateSiteForm';
      this.sondage.dType = 'lieu';
    } else if (this.dateFormSelected) {
      this.routerLinkEnabled = true;
      this.route = '/generateDateForm';
      this.sondage.dType = 'date';
    } else {
      this.routerLinkEnabled = false;
    }
  }

  nextComponent() {
    this.shareService.changeMessage(this.sondage);
    if (this.routerLinkEnabled) {
      this.router.navigate([this.route]);
    }
  }
}
