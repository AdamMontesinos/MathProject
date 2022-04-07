import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegonGrauComponent } from './segon-grau.component';

describe('SegonGrauComponent', () => {
  let component: SegonGrauComponent;
  let fixture: ComponentFixture<SegonGrauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegonGrauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegonGrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
