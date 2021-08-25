import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeVehiculosComponent } from './informe-vehiculos.component';

describe('InformeVehiculosComponent', () => {
  let component: InformeVehiculosComponent;
  let fixture: ComponentFixture<InformeVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
