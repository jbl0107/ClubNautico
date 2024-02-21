import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSocioComponent } from './registrar-socio.component';

describe('RegistrarSocioComponent', () => {
  let component: RegistrarSocioComponent;
  let fixture: ComponentFixture<RegistrarSocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSocioComponent]
    });
    fixture = TestBed.createComponent(RegistrarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
