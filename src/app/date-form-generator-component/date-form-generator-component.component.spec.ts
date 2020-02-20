import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormGeneratorComponentComponent } from './date-form-generator-component.component';

describe('DateFormGeneratorComponentComponent', () => {
  let component: DateFormGeneratorComponentComponent;
  let fixture: ComponentFixture<DateFormGeneratorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormGeneratorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormGeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
