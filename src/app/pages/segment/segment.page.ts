import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  publisher: string = '';

  superheroes: Observable<any>;

  constructor( private dataService:DataService) { }

  ngOnInit() {

   this.superheroes = this.dataService.getHeroes().pipe(
    delay(1200)
   );
  }

  segmentChanged(event){
   //console.log(event.detail.value);
    this.publisher = event.detail.value;

    
  }

}
