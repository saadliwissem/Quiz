import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNoteComponent } from './students-note.component';

describe('StudentsNoteComponent', () => {
  let component: StudentsNoteComponent;
  let fixture: ComponentFixture<StudentsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
