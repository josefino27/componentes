import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchbarModalPageRoutingModule } from './searchbar-modal-routing.module';

import { SearchbarModalPage } from './searchbar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarModalPageRoutingModule
  ],
  declarations: [SearchbarModalPage]
})
export class SearchbarModalPageModule {}
