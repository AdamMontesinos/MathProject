import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegonGrauExercicisComponent } from './segon-grau-exercicis.component';

describe('SegonGrauExercicisComponent', () => {
  let component: SegonGrauExercicisComponent;
  let fixture: ComponentFixture<SegonGrauExercicisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegonGrauExercicisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegonGrauExercicisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
