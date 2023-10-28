import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetListPage } from './bet-list.page';

const routes: Routes = [
  {
    path: '',
    component: BetListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetListPageRoutingModule {}
