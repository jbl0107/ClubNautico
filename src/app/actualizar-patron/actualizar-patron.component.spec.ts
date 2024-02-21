import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPatronComponent } from './actualizar-patron.component';

describe('ActualizarPatronComponent', () => {
  let component: ActualizarPatronComponent;
  let fixture: ComponentFixture<ActualizarPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPatronComponent]
    });
    fixture = TestBed.createComponent(ActualizarPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
