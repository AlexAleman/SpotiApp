import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'




// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  // paises:any[] = [];
  // constructor( private http:HttpClient ) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //   .subscribe( (data: any) => {
      //     this.paises = data;
      //     console.log(data);
      //   })
      // }

  nuevasCanciones: any[] = [];

  constructor ( private spotify: SpotifyService) {
    this.spotify.getNewReleases()
        .subscribe( (data:any) => {
          this.nuevasCanciones = data.albums.items;
          console.log(data);

        })
  }
}
