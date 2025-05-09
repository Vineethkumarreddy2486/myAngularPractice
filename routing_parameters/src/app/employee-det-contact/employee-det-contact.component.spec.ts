import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetContactComponent } from './employee-det-contact.component';

describe('EmployeeDetContactComponent', () => {
  let component: EmployeeDetContactComponent;
  let fixture: ComponentFixture<EmployeeDetContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
