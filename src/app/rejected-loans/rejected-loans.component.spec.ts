import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedLoansComponent } from './rejected-loans.component';

describe('RejectedLoansComponent', () => {
  let component: RejectedLoansComponent;
  let fixture: ComponentFixture<RejectedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
