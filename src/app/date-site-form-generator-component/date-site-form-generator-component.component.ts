import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-date-site-form-generator-component',
  templateUrl: './date-site-form-generator-component.component.html',
  styleUrls: ['./date-site-form-generator-component.component.css']
})
export class DateSiteFormGeneratorComponentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  dateSiteFormGenerator: FormGroup;


  ngOnInit() {
    this.dateSiteFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
  }

  get propositions() {
    return this.dateSiteFormGenerator.get('propositions') as FormArray;
  }

  addProposition() {
    this.propositions.push(this.fb.group({proposition: ''}));
  }

  removeProposition(index) {
    if (index !== 0) {
      this.propositions.removeAt(index);
    }
  }

}
