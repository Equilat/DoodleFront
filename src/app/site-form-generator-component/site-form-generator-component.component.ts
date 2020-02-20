import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-site-form-generator-component',
  templateUrl: './site-form-generator-component.component.html',
  styleUrls: ['./site-form-generator-component.component.css']
})
export class SiteFormGeneratorComponentComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  siteFromGenerator: FormGroup;

  ngOnInit() {

    this.siteFromGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
  }

  get propositions() {
    return this.siteFromGenerator.get('propositions') as FormArray;
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
