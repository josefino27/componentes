import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-searchbar-modal',
  templateUrl: './searchbar-modal.page.html',
  styleUrls: ['./searchbar-modal.page.scss'],
})
export class SearchbarModalPage implements OnInit {

  @Input() nombre:string;
  @Input() pais: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalCtrl.dismiss();
  }

}
