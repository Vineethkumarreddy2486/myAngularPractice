import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeDetOverviewComponent } from './emloyee-det-overview.component';

describe('EmloyeeDetOverviewComponent', () => {
  let component: EmloyeeDetOverviewComponent;
  let fixture: ComponentFixture<EmloyeeDetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmloyeeDetOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmloyeeDetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
