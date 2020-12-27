import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharetripsPopupComponent } from './sharetrips-popup.component';

describe('SharetripsPopupComponent', () => {
  let component: SharetripsPopupComponent;
  let fixture: ComponentFixture<SharetripsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharetripsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharetripsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
