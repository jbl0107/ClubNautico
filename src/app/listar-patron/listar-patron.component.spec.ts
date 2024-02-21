import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPatronComponent } from './listar-patron.component';

describe('ListarPatronComponent', () => {
  let component: ListarPatronComponent;
  let fixture: ComponentFixture<ListarPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPatronComponent]
    });
    fixture = TestBed.createComponent(ListarPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
