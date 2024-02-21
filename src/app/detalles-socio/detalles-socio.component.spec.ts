import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSocioComponent } from './detalles-socio.component';

describe('DetallesSocioComponent', () => {
  let component: DetallesSocioComponent;
  let fixture: ComponentFixture<DetallesSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesSocioComponent]
    });
    fixture = TestBed.createComponent(DetallesSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
