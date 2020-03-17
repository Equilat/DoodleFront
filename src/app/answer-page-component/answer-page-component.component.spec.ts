import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerPageComponentComponent } from './answer-page-component.component';

describe('AnswerPageComponentComponent', () => {
  let component: AnswerPageComponentComponent;
  let fixture: ComponentFixture<AnswerPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
