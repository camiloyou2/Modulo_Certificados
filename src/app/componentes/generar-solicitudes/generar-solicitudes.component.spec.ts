import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarSolicitudesComponent } from './generar-solicitudes.component';

describe('GenerarSolicitudesComponent', () => {
  let component: GenerarSolicitudesComponent;
  let fixture: ComponentFixture<GenerarSolicitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerarSolicitudesComponent]
    });
    fixture = TestBed.createComponent(GenerarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
