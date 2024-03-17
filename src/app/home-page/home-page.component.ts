import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';

// Services
import { CryptoCardsService } from '../crypto-cards.service';

// Types
import { CryptoCoins } from '../cryptocoins';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CryptoCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  cryptoItemList: CryptoCoins[] = [];
  cryptoService = inject(CryptoCardsService);

  constructor() {
    this.cryptoService
      .fetchAllCryptoCoins()
      .then((res) => {
        this.cryptoItemList = res;
        console.log(this.cryptoItemList);
      })
      .catch((err) => console.error(err));
  }
}
