import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcosPatronComponent } from './barcos-patron.component';

describe('BarcosPatronComponent', () => {
  let component: BarcosPatronComponent;
  let fixture: ComponentFixture<BarcosPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcosPatronComponent]
    });
    fixture = TestBed.createComponent(BarcosPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
