import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcosSocioComponent } from './barcos-socio.component';

describe('BarcosSocioComponent', () => {
  let component: BarcosSocioComponent;
  let fixture: ComponentFixture<BarcosSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcosSocioComponent]
    });
    fixture = TestBed.createComponent(BarcosSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
