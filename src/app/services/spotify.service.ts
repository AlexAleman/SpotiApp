import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDkAFqSGn8zuCLarhwA0GMuk3CdF1neLMotela2xvl0e86tyDGCmiN5q-QyaB1G3fsjQ6maU80HfhBJORY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDkAFqSGn8zuCLarhwA0GMuk3CdF1neLMotela2xvl0e86tyDGCmiN5q-QyaB1G3fsjQ6maU80HfhBJORY'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, {headers});
  }
}
