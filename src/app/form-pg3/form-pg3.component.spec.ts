import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPg3Component } from './form-pg3.component';

describe('FormPg3Component', () => {
  let component: FormPg3Component;
  let fixture: ComponentFixture<FormPg3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPg3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
