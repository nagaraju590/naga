import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoGridComponent } from './employee-info-grid.component';

describe('DetailContainerComponent', () => {
  let component: EmployeeInfoGridComponent;
  let fixture: ComponentFixture<EmployeeInfoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInfoGridComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInfoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
