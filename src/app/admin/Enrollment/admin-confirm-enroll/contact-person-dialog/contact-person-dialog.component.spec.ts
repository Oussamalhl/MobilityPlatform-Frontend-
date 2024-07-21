import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonDialogComponent } from './contact-person-dialog.component';

describe('ContactPersonDialogComponent', () => {
  let component: ContactPersonDialogComponent;
  let fixture: ComponentFixture<ContactPersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPersonDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
