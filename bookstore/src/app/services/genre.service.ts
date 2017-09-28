import { Injectable } from '@angular/core';
import {Genre} from '../class/genre';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GenreService {

  private genreUrl = 'app/genres';
  private headers = new Headers({'Content-Type' : 'application/json'});

  getGenres(): Promise<Genre[]> {
      return this.http.get(this.genreUrl)
      .toPromise()
      .then(response => response.json().data as Genre[])
      .catch(this.handleError);
  }

  createGenre(genre: Genre): Promise<Genre>{
    return this.http.post(this.genreUrl, JSON.stringify(genre), { headers: this.headers})
    .toPromise()
    .then(response => response.json().data as Genre)
    .catch(this.handleError);
  }

  private handleError(error){
    return Promise.reject(error);
  }

  constructor(private http: Http) { }

}
