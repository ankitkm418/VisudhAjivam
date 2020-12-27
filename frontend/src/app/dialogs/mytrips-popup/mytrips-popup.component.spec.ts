import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripsPopupComponent } from './mytrips-popup.component';

describe('MytripsPopupComponent', () => {
  let component: MytripsPopupComponent;
  let fixture: ComponentFixture<MytripsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytripsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytripsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
