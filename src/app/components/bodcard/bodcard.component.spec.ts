import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodcardComponent } from './bodcard.component';

describe('BodcardComponent', () => {
  let component: BodcardComponent;
  let fixture: ComponentFixture<BodcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
