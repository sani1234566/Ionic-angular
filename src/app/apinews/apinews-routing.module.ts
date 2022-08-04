import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApinewsPage } from './apinews.page';

const routes: Routes = [
  {
    path: '',
    component: ApinewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApinewsPageRoutingModule {}
