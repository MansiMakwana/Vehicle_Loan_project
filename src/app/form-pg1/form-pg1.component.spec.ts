import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPg1Component } from './form-pg1.component';

describe('FormPg1Component', () => {
  let component: FormPg1Component;
  let fixture: ComponentFixture<FormPg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
