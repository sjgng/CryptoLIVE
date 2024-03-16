import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoCardsService {
  cryptoItems: any = [];

  constructor() {
    this.cryptoItems = this.CRYPTO_PLACEHOLDER;
  }

  getAllCryptoItems() {
    return this.cryptoItems;
  }

  CRYPTO_PLACEHOLDER = [
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
    {
      title: 'BITCOIN CASH',
      thumbnail: 'https://bitcoincash.org/img/green/bitcoin-cash-circle.svg',
      tags: ['BCH'],
    },
  ];
}
