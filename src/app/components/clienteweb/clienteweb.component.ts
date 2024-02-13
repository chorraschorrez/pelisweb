import { Component } from '@angular/core';

@Component({
  selector: 'app-clienteweb',
  standalone: true,
  imports: [],
  templateUrl: './clienteweb.component.html',
  styleUrl: './clienteweb.component.scss'
})
export class ClientewebComponent {
  constructor(private cws:ConnectorwebService){
  }
  obtenerInfo(){
    // Ojo el http no viene de golpe, un forEach fallaría. Me quedo escuchando con subscribe(). 
    this.cws.getMovies().subscribe()((resultado =>))
  }
}

