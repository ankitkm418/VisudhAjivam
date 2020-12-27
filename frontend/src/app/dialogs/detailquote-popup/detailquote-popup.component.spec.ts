import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailquotePopupComponent } from './detailquote-popup.component';

describe('DetailquotePopupComponent', () => {
  let component: DetailquotePopupComponent;
  let fixture: ComponentFixture<DetailquotePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailquotePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailquotePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
