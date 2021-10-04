import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproovedLoansComponent } from './aprooved-loans.component';

describe('AproovedLoansComponent', () => {
  let component: AproovedLoansComponent;
  let fixture: ComponentFixture<AproovedLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproovedLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproovedLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
