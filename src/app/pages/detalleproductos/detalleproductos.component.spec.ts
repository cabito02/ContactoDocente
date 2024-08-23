import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproductosComponent } from './detalleproductos.component';

describe('DetalleproductosComponent', () => {
  let component: DetalleproductosComponent;
  let fixture: ComponentFixture<DetalleproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
