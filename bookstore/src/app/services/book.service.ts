import { Injectable } from '@angular/core';
import {Book} from '../class/book';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

  private booksUrl = 'app/books';
  private headers = new Headers({'Content-Type' : 'application/json'});

  getBooks(): Promise<Book[]> {
      return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response.json().data as Book[])
      .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
  let url = `${this.booksUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Book)
    .catch(this.handleError);
}

  createBook(book: Book): Promise<Book>{
    return this.http.post(this.booksUrl, JSON.stringify(book), { headers: this.headers})
    .toPromise()
    .then(response => response.json().data as Book)
    .catch(this.handleError);
  }

  updateBook(book: Book): Promise<any>{
    let updateUrl = `${this.booksUrl}/${book.id}`;
    return this.http.put(updateUrl, JSON.stringify(book), { headers: this.headers})
    .toPromise()
    .then(this.success)
    .catch(this.handleError);
  }

  deleteBook(id: number): Promise<void>{
    let deleteUrl = `${this.booksUrl}/${id}`;
    return this.http.delete(deleteUrl, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }

  private success(): Promise<any>{
    return Promise.resolve();
  }



  private handleError(error){
    return Promise.reject(error);
  }

  constructor(private http: Http) { }

}
