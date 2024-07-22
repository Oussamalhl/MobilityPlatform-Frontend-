import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnrollmentQuizPassComponent } from './admin-enrollment-quiz-pass.component';

describe('AdminEnrollmentQuizPassComponent', () => {
  let component: AdminEnrollmentQuizPassComponent;
  let fixture: ComponentFixture<AdminEnrollmentQuizPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnrollmentQuizPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEnrollmentQuizPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
