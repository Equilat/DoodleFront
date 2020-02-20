import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date-form-generator-component',
  templateUrl: './date-form-generator-component.component.html',
  styleUrls: ['./date-form-generator-component.component.css']
})
export class DateFormGeneratorComponentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  dateFormGenerator: FormGroup;

  ngOnInit() {
    this.dateFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
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

}
