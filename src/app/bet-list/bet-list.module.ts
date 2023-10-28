import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetListPageRoutingModule } from './bet-list-routing.module';

import { BetListPage } from './bet-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetListPageRoutingModule
  ],
  declarations: [BetListPage]
})
export class BetListPageModule {}
