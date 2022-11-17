import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowEnrollmentComponent } from './admin-show-enrollment.component';

describe('AdminShowEnrollmentComponent', () => {
  let component: AdminShowEnrollmentComponent;
  let fixture: ComponentFixture<AdminShowEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShowEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
