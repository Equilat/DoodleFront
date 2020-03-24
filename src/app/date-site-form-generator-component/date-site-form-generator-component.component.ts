import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Sondage} from '../sondage';
import {Router} from '@angular/router';
import {ShareService} from '../share.service';


@Component({
  selector: 'app-date-site-form-generator-component',
  templateUrl: './date-site-form-generator-component.component.html',
  styleUrls: ['./date-site-form-generator-component.component.css']
})
export class DateSiteFormGeneratorComponentComponent implements OnInit {

  sondage: Sondage;
  dateSiteFormGenerator: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private shareService: ShareService) {
    this.sondage = new Sondage(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.dateSiteFormGenerator = this.fb.group({
      propositions: this.fb.array([this.fb.group({proposition: ''})])
    });
    this.shareService.currentMessage.subscribe(message => this.sondage = message);
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

  nextComponent() {
    this.sondage.Lieux = this.dateSiteFormGenerator.get('propositions').value;
    this.shareService.changeMessage(this.sondage);
    this.router.navigate(['identityFormGenerator']);
  }
}
