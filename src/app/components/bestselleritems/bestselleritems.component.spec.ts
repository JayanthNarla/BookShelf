import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestselleritemsComponent } from './bestselleritems.component';

describe('BestselleritemsComponent', () => {
  let component: BestselleritemsComponent;
  let fixture: ComponentFixture<BestselleritemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestselleritemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestselleritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
