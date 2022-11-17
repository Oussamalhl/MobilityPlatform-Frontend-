import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmEnrollComponent } from './admin-confirm-enroll.component';

describe('AdminConfirmEnrollComponent', () => {
  let component: AdminConfirmEnrollComponent;
  let fixture: ComponentFixture<AdminConfirmEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfirmEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConfirmEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
