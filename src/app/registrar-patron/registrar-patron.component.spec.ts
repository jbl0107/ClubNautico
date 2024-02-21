import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPatronComponent } from './registrar-patron.component';

describe('RegistrarPatronComponent', () => {
  let component: RegistrarPatronComponent;
  let fixture: ComponentFixture<RegistrarPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPatronComponent]
    });
    fixture = TestBed.createComponent(RegistrarPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
