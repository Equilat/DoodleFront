import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSiteFormGeneratorComponentComponent } from './date-site-form-generator-component.component';

describe('DateSiteFormGeneratorComponentComponent', () => {
  let component: DateSiteFormGeneratorComponentComponent;
  let fixture: ComponentFixture<DateSiteFormGeneratorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSiteFormGeneratorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSiteFormGeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
