import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './service/previsoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  previsoes: Previsao[];
  city: string = 'itu';

  constructor(private previsoesService: PrevisoesService){}

  enviar() {
    this.previsoesService.obterPrevisoes(this.city).subscribe(previsoes => {
      this.previsoes = previsoes['list'];
      console.info(this.previsoes);
    });
  }
}
