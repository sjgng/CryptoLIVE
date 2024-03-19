import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Types
import { CryptoCoins, CoinGeckoApiData } from './cryptocoins';

@Injectable({
  providedIn: 'root',
})
export class CryptoCardsService {
  readonly COINGECKO_API_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc';

  private filteredCryptoCoinsList: CryptoCoins[] = [];
  private cryptoItemList: CryptoCoins[] = [];
  private filteredListSubject: BehaviorSubject<CryptoCoins[]> =
    new BehaviorSubject<CryptoCoins[]>(this.filteredCryptoCoinsList);

  filteredCryptoItemList$: Observable<CryptoCoins[]> =
    this.filteredListSubject.asObservable();

  constructor() {
    this.fetchAllCryptoCoins();
  }

  async fetchAllCryptoCoins(): Promise<void> {
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

    this.cryptoItemList = cryptoData;
    this.filteredCryptoCoinsList = this.cryptoItemList;
    this.filteredListSubject.next(this.filteredCryptoCoinsList);
  }

  getAllCryptoCoins() {
    return this.filteredCryptoCoinsList;
  }

  filterCryptoCoins(value: string) {
    if (value.length >= 3) {
      this.filteredCryptoCoinsList = this.cryptoItemList.filter(
        (coin: CryptoCoins) => {
          return coin.name.toLowerCase().includes(value.toLowerCase());
        }
      );
      console.log(this.filteredCryptoCoinsList);
      this.filteredListSubject.next(this.filteredCryptoCoinsList);
    } else {
      this.filteredCryptoCoinsList = this.cryptoItemList;
      this.filteredListSubject.next(this.filteredCryptoCoinsList);
    }
  }
}
