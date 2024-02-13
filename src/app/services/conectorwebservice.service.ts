import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectorwebserviceService {
  clienteHttp:HttpClient|undefined;
  static URL = "https://fpaniaguajavascript.github.io/movies/movies-1900s.json";
  constructor() { 
  }
  getMovies(){
    this.clienteHttp?.get<any>(ConectorwebService.URL); //devuelve un ovservable
  }
}
