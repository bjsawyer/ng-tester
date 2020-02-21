import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTesterComponent } from './ng-tester.component';

describe('NgTesterComponent', () => {
  let component: NgTesterComponent;
  let fixture: ComponentFixture<NgTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
