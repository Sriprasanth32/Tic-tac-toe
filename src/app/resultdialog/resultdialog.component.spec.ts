import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdialogComponent } from './resultdialog.component';

describe('ResultdialogComponent', () => {
  let component: ResultdialogComponent;
  let fixture: ComponentFixture<ResultdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
