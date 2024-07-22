import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnrollmentQuizCreateComponent } from './admin-enrollment-quiz-create.component';

describe('AdminEnrollmentQuizCreateComponent', () => {
  let component: AdminEnrollmentQuizCreateComponent;
  let fixture: ComponentFixture<AdminEnrollmentQuizCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnrollmentQuizCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEnrollmentQuizCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
