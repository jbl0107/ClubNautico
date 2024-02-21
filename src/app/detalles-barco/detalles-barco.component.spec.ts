import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBarcoComponent } from './detalles-barco.component';

describe('DetallesBarcoComponent', () => {
  let component: DetallesBarcoComponent;
  let fixture: ComponentFixture<DetallesBarcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesBarcoComponent]
    });
    fixture = TestBed.createComponent(DetallesBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
