import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityFormGeneratorComponent } from './identity-form-generator.component';

describe('IdentityFormGeneratorComponent', () => {
  let component: IdentityFormGeneratorComponent;
  let fixture: ComponentFixture<IdentityFormGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityFormGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
