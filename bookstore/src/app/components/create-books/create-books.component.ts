import { Component, OnInit } from '@angular/core';
import {Book} from '../../class/Book';
import {Genre} from '../../class/Genre';
import { GenreService } from '../../services/genre.service';
import { BookService } from '../../services/book.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  genres: Genre[];
  book: Book = new Book();
  createBook(){
    if(this.book.name){
      this.bookService.createBook(this.book);
      this._flashMessagesService.show('Book Created', { cssClass: 'alert-success', timeout: 1000 });
      console.log(this.book);
    }else{

    }

  }

  constructor(private genreService: GenreService, private bookService: BookService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.genreService.getGenres()
    .then(genres => this.genres = genres)
    .catch(error => console.log(error))
  }

}
