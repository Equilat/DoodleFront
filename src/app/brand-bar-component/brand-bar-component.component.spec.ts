import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBarComponentComponent } from './brand-bar-component.component';

describe('BrandBarComponentComponent', () => {
  let component: BrandBarComponentComponent;
  let fixture: ComponentFixture<BrandBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
