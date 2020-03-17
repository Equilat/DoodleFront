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
  sondage: String;

  constructor(private doodleApiService: DoodleApiService, private sondageTransfer: ShareService) {
  }

  ngOnInit() {
    console.log("At app component");
    this.sondageTransfer.sendMessage('Hello! From AppComponent !!');
    this.sondageTransfer.getMessage().subscribe(message => this.sondage = message);
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
    console.log('le sondage, le vrai : ', this.sondage);
    console.log('le sondage, le vrai : ', this.sondageTransfer.getMessage());
    console.log('le sondage, le faux ', truc);
    this.doodleApiService.postSurvey(truc);
  }
}
