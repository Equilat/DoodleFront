import {Component, OnInit} from '@angular/core';
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

  dateFormGenerator: FormGroup;
  sondage: Sondage;

  constructor(private router: Router, private fb: FormBuilder, private shareService: ShareService) {
    this.sondage = new Sondage(null, null, null, null, null, null, null);
  }

  get propositions() {
    return this.dateFormGenerator.get('propositions') as FormArray;
  }

  ngOnInit() {
    this.dateFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
    this.shareService.currentMessage.subscribe(message => this.sondage = message);
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
    this.sondage.DatesReu = this.dateFormGenerator.get('propositions').value;
    this.shareService.changeMessage(this.sondage);
    this.router.navigate(['identityFormGenerator']);
  }

}
