import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailsEnrollmentComponent } from './admin-details-enrollment.component';

describe('AdminDetailsEnrollmentComponent', () => {
  let component: AdminDetailsEnrollmentComponent;
  let fixture: ComponentFixture<AdminDetailsEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetailsEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetailsEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
