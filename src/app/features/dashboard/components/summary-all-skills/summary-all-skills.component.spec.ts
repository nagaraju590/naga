import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAllSkillsComponent } from './summary-all-skills.component';

describe('SummaryAllSkillsComponent', () => {
  let component: SummaryAllSkillsComponent;
  let fixture: ComponentFixture<SummaryAllSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAllSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAllSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
