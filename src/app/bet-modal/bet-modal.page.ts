import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.page.html',
  styleUrls: ['./bet-modal.page.scss'],
})

export class BetModalPage {
  betAmount: number = 0;
  match: any;
  odds: number;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.match = this.navParams.get('match');
    this.odds = this.navParams.get('odds');
  }

  placeBet() {
    // Logique pour placer le pari avec le montant (this.betAmount)
    // Vous pouvez appeler une méthode ou un service pour gérer le pari réel
    // Assurez-vous de fermer le modal après avoir placé le pari
    this.modalController.dismiss();
  }
}

