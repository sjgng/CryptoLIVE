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
    const response = await fetch(this.COINGECKO_API_URL);
    const data = await response.json();

    const cryptoData: CryptoCoins[] = data.map((coin: CoinGeckoApiData) => {
      return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        current_price: coin.current_price,
        market_cap: coin.market_cap,
        market_cap_rank: coin.market_cap_rank,
        color: 'rgb(1,1,1)',
      };
    });

    return cryptoData ?? [];
  }
}
