import {Component, OnInit} from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ShareService} from '../share.service';
import {Sondage} from '../sondage';
import {Utilisateur} from '../utilisateur';

@Component({
  selector: 'app-identity-form-generator',
  templateUrl: './identity-form-generator.component.html',
  styleUrls: ['./identity-form-generator.component.css']
})
export class IdentityFormGeneratorComponent implements OnInit {
  identityFormGenerator: FormGroup;
  sondage: Sondage;
  usermail: string;
  username: string;

  constructor(private doodleApiService: DoodleApiService, private shareService: ShareService) {
    this.identityFormGenerator = new FormGroup({
      nameControl: new FormControl(''),
      mailControl: new FormControl('')
    });
  }

  ngOnInit() {
    this.shareService.currentMessage.subscribe(message => this.sondage = message);
  }

  postSurvey() {
    // let truc = new Sondage(null, null, null, null, null, null , null);
    // truc.DType = 'dateLieu';
    const createur = new Utilisateur(this.usermail, this.username,
      null, null, null);
    // this.sondage.Utilisateurs = [createur];
    this.doodleApiService.postSurvey(this.sondage);
  }
}
