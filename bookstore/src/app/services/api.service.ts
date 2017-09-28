import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class APIService implements InMemoryDbService {

  createDb() {

    let genres = [
      {id: 1, name: 'action'}
    ];

    let books = [
      { id: 1, name: 'Windstorm', price: 13, genre: {name: "action"}},
      { id: 2, name: 'Bombasto', price: 13, genre: {name: "action"}},
      { id: 3, name: 'Magneta', price: 13, genre: {name: "action"} },
      { id: 4, name: 'Tornado', price: 13, genre: {name: "action"} }
    ];
    return {books, genres};
  }

}
