import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ShareService} from '../share.service';
import {Sondage} from '../sondage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-date-form-generator-component',
  templateUrl: './date-form-generator-component.component.html',
  styleUrls: ['./date-form-generator-component.component.css']
})
export class DateFormGeneratorComponentComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private sondageTransfer: ShareService) {
    // this.sondage = new Sondage(null, null, null, null, null);
  }

  dateFormGenerator: FormGroup;
  // sondage: Sondage;

  ngOnInit() {
    this.dateFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
    this.sondageTransfer.getMessage().subscribe(message => this.sondage = message);
  }

  get propositions() {
    return this.dateFormGenerator.get('propositions') as FormArray;
  }

  addProposition() {
    this.propositions.push(this.fb.group({proposition: ''}));
  }

  removeProposition(index) {
    if (index !== 0) {
      this.propositions.removeAt(index);
    }
  }

  nextComponent() {
    this.sondage.webLink = 'google.com';
    console.log('choice : ', this.sondage);
      this.router.navigate(['identityFormGenerator']);
  }

}
