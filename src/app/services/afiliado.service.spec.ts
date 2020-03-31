import { TestBed } from '@angular/core/testing';

import { AfiliadoService } from './afiliado.service';

describe('AfiliadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfiliadoService = TestBed.get(AfiliadoService);
    expect(service).toBeTruthy();
  });
});
