import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavManagerComponent } from './left-nav-manager.component';

describe('LeftNavManagerComponent', () => {
  let component: LeftNavManagerComponent;
  let fixture: ComponentFixture<LeftNavManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
