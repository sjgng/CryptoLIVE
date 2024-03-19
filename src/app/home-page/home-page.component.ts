import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

// Components
import { CryptoCardComponent } from '../crypto-card/crypto-card.component';

// Service
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
export class HomePageComponent implements OnInit, OnDestroy {
  cryptoCoinsItemList: CryptoCoins[] = [];

  subscription: Subscription = new Subscription();

  constructor(private cryptoCardsService: CryptoCardsService) {}

  ngOnInit(): void {
    this.subscription =
      this.cryptoCardsService.filteredCryptoItemList$.subscribe(
        (filteredItemList) => (this.cryptoCoinsItemList = filteredItemList)
      );
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
