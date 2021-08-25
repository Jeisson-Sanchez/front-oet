import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePersonasComponent } from './informe-personas.component';

describe('InformePersonasComponent', () => {
  let component: InformePersonasComponent;
  let fixture: ComponentFixture<InformePersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformePersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
