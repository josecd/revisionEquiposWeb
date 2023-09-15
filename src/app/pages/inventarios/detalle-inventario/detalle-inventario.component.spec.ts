import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInventarioComponent } from './detalle-inventario.component';

describe('DetalleInventarioComponent', () => {
  let component: DetalleInventarioComponent;
  let fixture: ComponentFixture<DetalleInventarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleInventarioComponent]
    });
    fixture = TestBed.createComponent(DetalleInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
