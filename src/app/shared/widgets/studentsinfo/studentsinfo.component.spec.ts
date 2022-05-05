import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsinfoComponent } from './studentsinfo.component';

describe('StudentsinfoComponent', () => {
  let component: StudentsinfoComponent;
  let fixture: ComponentFixture<StudentsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
