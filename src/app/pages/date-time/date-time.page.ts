import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();


  customYearValues = [
    2020,2010,2022,2000
  ];

  async presentPicker() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Confirm',
          handler: (selected) => {
            console.log(selected.animal.value);
          },
        }
      ],
      columns: [
        {
          name: 'animal',
          options: [
            { text: 'Dog', value: 'perro' },
            { text: 'Cat', value: 'gato' },
            { text: 'Bird', value: 'ave' },
          ]
        }
      ]
    });
    await picker.present();
  }

  constructor(private pickerController: PickerController) {}

  ngOnInit() {
}

  cambioFecha(event){
    console.log(new Date(event.detail.value))
    }

}
