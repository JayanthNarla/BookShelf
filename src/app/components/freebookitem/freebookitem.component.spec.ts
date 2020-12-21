import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreebookitemComponent } from './freebookitem.component';

describe('FreebookitemComponent', () => {
  let component: FreebookitemComponent;
  let fixture: ComponentFixture<FreebookitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreebookitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreebookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
