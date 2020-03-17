import {Component, OnInit} from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';
import {FormGroup} from '@angular/forms';
import {ShareService} from '../share.service';
import {Sondage} from '../sondage';

@Component({
  selector: 'app-identity-form-generator',
  templateUrl: './identity-form-generator.component.html',
  styleUrls: ['./identity-form-generator.component.css']
})
export class IdentityFormGeneratorComponent implements OnInit {
  identityFormGenerator: FormGroup;
  sondage: Sondage;

  constructor(private doodleApiService: DoodleApiService, private shareService: ShareService) {
  }

  ngOnInit() {
    this.shareService.currentMessage.subscribe(message => this.sondage = message);
  }

  postSurvey() {
    const truc = {
      'lienWeb': 'www.sondage_lieu.com depuis le front angular !pokvlsdjvlksdjvklsdj!',
      'dtype': 'lieu',
      'utilisateurs': null,
      'reunion': null,
      'lieux': [
        'new york'
      ]
    };
    console.log('le sondage, le vrai : ', this.shareService.currentMessage);
    console.log('le sondage, le faux ', truc);
    this.doodleApiService.postSurvey(this.sondage);
  }
}
