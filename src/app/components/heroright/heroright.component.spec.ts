import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerorightComponent } from './heroright.component';

describe('HerorightComponent', () => {
  let component: HerorightComponent;
  let fixture: ComponentFixture<HerorightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerorightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerorightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
