import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any) {
    this.ionList.closeSlidingItems();
    console.log('favorite', user)
  };
  share(user: any) {
    this.ionList.closeSlidingItems();
    console.log('share', user)
  };
  delete(user: any) {
    this.ionList.closeSlidingItems();
    console.log('delete', user.name)
  };

}
