import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCandidatoComponent } from './informacion-candidato.component';

describe('InformacionCandidatoComponent', () => {
  let component: InformacionCandidatoComponent;
  let fixture: ComponentFixture<InformacionCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
