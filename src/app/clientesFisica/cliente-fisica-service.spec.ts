import { TestBed } from '@angular/core/testing';

import { ClienteFisicaService } from './cliente-fisica-service';

describe('ClienteFisicaServiceService', () => {
  let service: ClienteFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
