import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {DoodleApiService} from '../doodle-api.service';
import {Sondage} from '../sondage';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-answer-page-component',
  templateUrl: './answer-page-component.component.html',
  styleUrls: ['./answer-page-component.component.css']
})
export class AnswerPageComponentComponent implements OnInit {
  private sondage: Sondage;
  private id: string;

  constructor(private doodleApiService: DoodleApiService, private fb: FormBuilder, private route: ActivatedRoute) { }

  answerFormGenerator: FormGroup;

  ngOnInit() {
    this.answerFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.doodleApiService.getSondage(this.id).subscribe(result => { console.log(result); this.sondage = result[0]; });
  }

}
