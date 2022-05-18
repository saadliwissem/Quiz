import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropQuestionsComponent } from './drop-questions.component';

describe('DropQuestionsComponent', () => {
  let component: DropQuestionsComponent;
  let fixture: ComponentFixture<DropQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
