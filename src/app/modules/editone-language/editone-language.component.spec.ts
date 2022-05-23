import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoneLanguageComponent } from './editone-language.component';

describe('EditoneLanguageComponent', () => {
  let component: EditoneLanguageComponent;
  let fixture: ComponentFixture<EditoneLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoneLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoneLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
