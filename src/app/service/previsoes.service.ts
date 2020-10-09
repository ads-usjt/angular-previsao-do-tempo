import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from '../model/previsao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor(private httpClient: HttpClient){}

  public obterPrevisoes(city: string): Observable<Previsao[]>{
    return this.httpClient
                  .get<Previsao[]>(
                      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e408f1f7ca01e8a2c75ed650aab5de99&units=metric&lang=pt_br&cnt=16`
                    );
  }
}
