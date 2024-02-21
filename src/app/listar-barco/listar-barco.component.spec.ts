import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBarcoComponent } from './listar-barco.component';

describe('ListarBarcoComponent', () => {
  let component: ListarBarcoComponent;
  let fixture: ComponentFixture<ListarBarcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBarcoComponent]
    });
    fixture = TestBed.createComponent(ListarBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
