import { Component } from '@angular/core';
import { Previsao } from './model/previsao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  previsoes: Previsao[] = [
    {
      data: '20/02/2020 15:00',
      descricao: 'Sol',
      tempMax: 32,
      humidity: 27,
      tempMin: 0.87,
      imgURL: '../assets/01d.png',
    },
    {
      data: '20/02/2020 18:00',
      descricao: 'Sol com Nuvens',
      tempMax: 28,
      humidity: 22,
      tempMin: 0.85,
      imgURL: '../assets/02d.png',
    },
    {
      data: '20/02/2020 21:00',
      descricao: 'Noite limpa',
      tempMax: 24,
      humidity: 10,
      tempMin: 0.82,
      imgURL: '../assets/01n.png',
    },
  ]
}
