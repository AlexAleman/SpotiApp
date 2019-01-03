import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artists;

  constructor( private spotify: SpotifyService) { }

  buscar(termino:string){
    this.spotify.getArtist(termino)
      .subscribe( data => {
        this.artists = data.artists.items;
        console.log(this.artists);
      });
  }
}
