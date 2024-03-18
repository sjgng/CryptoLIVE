import { Component, Input } from '@angular/core';

// Interfaces
import { CryptoCoins } from '../cryptocoins';

@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [],
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.css',
})
export class CryptoCardComponent {
  @Input() cryptoItemData: CryptoCoins = {
    id: 'cebulokoin',
    symbol: 'CBL',
    name: 'cebulokoin',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdaylicooking.pl%2Fwp-content%2Fuploads%2F2019%2F01%2Fcebula.jpg&f=1&nofb=1&ipt=3b563396bc722b25650e16a05dade14615e02620c0cdc51f5276e942c9c05c56&ipo=images',
    current_price: 2137,
    market_cap: 1333337,
    market_cap_rank: 1,
    color: 'rgb(1,1,1)',
  };
}
