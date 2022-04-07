import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegonGrauCalculadoraComponent } from './segon-grau-calculadora.component';

describe('SegonGrauCalculadoraComponent', () => {
  let component: SegonGrauCalculadoraComponent;
  let fixture: ComponentFixture<SegonGrauCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegonGrauCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegonGrauCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
