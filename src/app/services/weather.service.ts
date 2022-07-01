/* eslint-disable @typescript-eslint/naming-convention */
import { IResposta } from './../models/IResposta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    url='https://api.hgbrasil.com/weather?format=json-cors&woeid=457479';

    constructor(private http: HttpClient) { }

  buscarPrevisao(): Observable<IResposta> {
    return this.http.get<IResposta>(this.url);
  }

  buscarIcone(slug: string){
    const icones = {
      storm:'thunderstorm',
      snow:'snow',
      hail:'cloud',
      rain:'rainy',
      fog:'cloud',
      clear_day:'sunny',
      clear_night:'moon',
      cloud:'cloud',
      cloudly_day:'partly-sunny',
      cloudly_night:'cloudy-night',
      none_day:'sunny',
      none_night:'moon',
    };
    return icones[slug];
  }
}
