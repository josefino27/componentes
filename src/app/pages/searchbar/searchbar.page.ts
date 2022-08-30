import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchbarModalPage } from '../searchbar-modal/searchbar-modal.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumnes: any[] = [];
  buscar: string = '';

  constructor(private modalCtrl:ModalController, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbum().subscribe( x =>{
      console.log
      this.albumnes = x;
      
    })
  }

  buscarTexto(event){    
    this.buscar = event.detail.value;
  }

  async mostrar(){

    const modal = await this.modalCtrl.create({
      component: SearchbarModalPage,
      componentProps:{
        nombre: 'searchBar',
      }

        });

    await modal.present();

    const resp = await modal.onDidDismiss();
    console.log(resp)
  }

}
