import { TestBed, inject } from '@angular/core/testing';
import { PessoaService } from './pessoa.service';

describe('PessoaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoaService]
    });
  });

  it('should ...', inject([PessoaService], (service: PessoaService) => {
    expect(service).toBeTruthy();
  }));
});
