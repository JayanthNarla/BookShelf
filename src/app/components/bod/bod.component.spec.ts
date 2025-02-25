import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodComponent } from './bod.component';

describe('BodComponent', () => {
  let component: BodComponent;
  let fixture: ComponentFixture<BodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
