import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetModalPage } from './bet-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BetModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetModalPageRoutingModule {}
