import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedContainerComponent } from './unauthorized-container.component';

describe('UnauthorizedContainerComponent', () => {
  let component: UnauthorizedContainerComponent;
  let fixture: ComponentFixture<UnauthorizedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
