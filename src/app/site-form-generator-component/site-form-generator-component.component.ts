import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ShareService} from '../share.service';
import {Sondage} from '../sondage';

@Component({
  selector: 'app-site-form-generator-component',
  templateUrl: './site-form-generator-component.component.html',
  styleUrls: ['./site-form-generator-component.component.css']
})
export class SiteFormGeneratorComponentComponent implements OnInit {

  siteFromGenerator: FormGroup;
  sondage: Sondage;

  constructor(private router: Router, private fb: FormBuilder, private shareService: ShareService) {
    this.sondage = new Sondage(null, null, null, null, null, null, null);
  }

  get propositions() {
    return this.siteFromGenerator.get('propositions') as FormArray;
  }

  ngOnInit() {

    this.siteFromGenerator = this.fb.group({
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
    this.sondage.Lieux = this.siteFromGenerator.get('propositions').value;
    this.shareService.changeMessage(this.sondage);
    this.router.navigate(['identityFormGenerator']);
  }

}
