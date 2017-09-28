import { Component, OnInit } from '@angular/core';
import {Book} from '../../class/book';
import {Genre} from '../../class/Genre';
import { BookService } from '../../services/book.service';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  constructor(private bookService: BookService, private genreService: GenreService) { }

  private books: Book[];
  private selectedBook: Book;
  private genres: Genre[];
  private selected: Genre;

  ngOnInit() {

      this.getBooks();

      this.genreService.getGenres()
      .then(genres => this.genres = genres)
      .catch(error => console.log(error))
  }

  getBooks(){
    this.bookService.getBooks()
    .then(books => this.books = books)
    .catch(error => console.log(error))
  }

  editBook(book: Book){
    this.selectedBook = book;
    console.log(this.selectedBook)
  }

  onSelect(val){
  console.log(val);
  this.books = this.books.filter(x => x.genre.name === val)
}


  delete(book: Book): void {
  this.bookService
      .deleteBook(book.id)
      .then(() => {
        this.books = this.books.filter(h => h !== book);
      });
}

}
