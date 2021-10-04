import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPg2Component } from './form-pg2.component';

describe('FormPg2Component', () => {
  let component: FormPg2Component;
  let fixture: ComponentFixture<FormPg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
