import { Injectable } from '@angular/core';

// Types
import { CryptoCoins, CoinGeckoApiData } from './cryptocoins';

@Injectable({
  providedIn: 'root',
})
export class CryptoCardsService {
  readonly COINGECKO_API_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc';

  constructor() {}

  async fetchAllCryptoCoins(): Promise<CryptoCoins[]> {
    let cryptoData: CryptoCoins[] = [];
    const data = await fetch(this.COINGECKO_API_URL);

    await data.json().then((res) => {
      res.forEach((coin: CoinGeckoApiData) => {
        cryptoData.push({
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          market_cap: coin.market_cap,
          market_cap_rank: coin.market_cap_rank,
        });
      });
    });

    return cryptoData ?? [];
  }
}
