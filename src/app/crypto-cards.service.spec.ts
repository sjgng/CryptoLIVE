import { TestBed } from '@angular/core/testing';

import { CryptoCardsService } from './crypto-cards.service';

describe('CryptoCardsService', () => {
  let service: CryptoCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
