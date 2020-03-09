import {Component, OnInit} from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';
import { FormsModule } from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-identity-form-generator',
  templateUrl: './identity-form-generator.component.html',
  styleUrls: ['./identity-form-generator.component.css']
})
export class IdentityFormGeneratorComponent implements OnInit {
  identityFormGenerator: FormGroup;

  constructor(private doodleApiService: DoodleApiService) {
  }

  ngOnInit() {
  }

  postSurvey() {
    const truc = {
      'lienWeb': 'www.sondage_lieu.com depuis le front angular !!!',
      'dtype': 'lieu',
      'utilisateurs': null,
      'reunion': null,
      'lieux': [
        'new york'
      ]
    };
    this.doodleApiService.postSurvey(truc);
  }
}
