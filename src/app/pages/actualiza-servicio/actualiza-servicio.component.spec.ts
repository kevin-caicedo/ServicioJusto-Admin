import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaServicioComponent } from './actualiza-servicio.component';

describe('ActualizaServicioComponent', () => {
  let component: ActualizaServicioComponent;
  let fixture: ComponentFixture<ActualizaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
