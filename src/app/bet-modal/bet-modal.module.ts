import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetModalPageRoutingModule } from './bet-modal-routing.module';

import { BetModalPage } from './bet-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetModalPageRoutingModule
  ],
  declarations: [BetModalPage]
})
export class BetModalPageModule {}
