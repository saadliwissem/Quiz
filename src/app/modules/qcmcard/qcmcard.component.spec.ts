import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmcardComponent } from './qcmcard.component';

describe('QcmcardComponent', () => {
  let component: QcmcardComponent;
  let fixture: ComponentFixture<QcmcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QcmcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
