import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPatronComponent } from './detalles-patron.component';

describe('DetallesPatronComponent', () => {
  let component: DetallesPatronComponent;
  let fixture: ComponentFixture<DetallesPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPatronComponent]
    });
    fixture = TestBed.createComponent(DetallesPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
