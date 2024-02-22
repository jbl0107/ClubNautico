import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasBarcoComponent } from './salidas-barco.component';

describe('SalidasBarcoComponent', () => {
  let component: SalidasBarcoComponent;
  let fixture: ComponentFixture<SalidasBarcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalidasBarcoComponent]
    });
    fixture = TestBed.createComponent(SalidasBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
