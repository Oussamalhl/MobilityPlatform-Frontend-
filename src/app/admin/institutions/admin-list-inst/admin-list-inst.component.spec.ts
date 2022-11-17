import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListInstComponent } from './admin-list-inst.component';

describe('AdminListInstComponent', () => {
  let component: AdminListInstComponent;
  let fixture: ComponentFixture<AdminListInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListInstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
