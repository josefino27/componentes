import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.8;

  constructor() { }

  ngOnInit() {
  }

  cambiaRango(event){

    this.porcentaje=(event.detail.value)/100;
    console.log(event.detail.value)
  }

}
