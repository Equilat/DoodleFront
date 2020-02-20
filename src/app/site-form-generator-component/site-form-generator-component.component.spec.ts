import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFormGeneratorComponentComponent } from './site-form-generator-component.component';

describe('SiteFormGeneratorComponentComponent', () => {
  let component: SiteFormGeneratorComponentComponent;
  let fixture: ComponentFixture<SiteFormGeneratorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteFormGeneratorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFormGeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
