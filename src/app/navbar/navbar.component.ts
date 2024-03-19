import { Component, inject } from '@angular/core';

// Services
import { CryptoCardsService } from '../crypto-cards.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  title: string = 'CryptoTwitch';
  cryptoCoinsServce = inject(CryptoCardsService);

  filterCoins(value: string) {
    this.cryptoCoinsServce.filterCryptoCoins(value);
  }
}
