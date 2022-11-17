import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListEnrollComponent } from './admin-list-enroll.component';

describe('AdminListEnrollComponent', () => {
  let component: AdminListEnrollComponent;
  let fixture: ComponentFixture<AdminListEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
