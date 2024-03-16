import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from '../navbar/navbar.component';
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';

// Services
import { CryptoCardsService } from '../crypto-cards.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CryptoCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  cryptoItemList: any = [];
  cryptoService = inject(CryptoCardsService);

  constructor() {
    this.cryptoItemList = this.cryptoService.getAllCryptoItems();

    console.log(this.cryptoItemList);
  }
}
