import { Component, OnInit } from '@angular/core';
import {DoodleApiService} from '../doodle-api.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  private utilisateurs: string[];

  constructor(private doodleApiService: DoodleApiService) { }

  ngOnInit() {
  }

  getAllUtilisateurs() {
    this.doodleApiService.getListUtilisateurs().subscribe(result => { console.log(result);  });
    console.log('Les utilisateurs récupérés depuis le back : ', this.utilisateurs);

  }
}
