import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchbarModalPage } from './searchbar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchbarModalPageRoutingModule {}
