import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasPatronComponent } from './salidas-patron.component';

describe('SalidasPatronComponent', () => {
  let component: SalidasPatronComponent;
  let fixture: ComponentFixture<SalidasPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalidasPatronComponent]
    });
    fixture = TestBed.createComponent(SalidasPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
