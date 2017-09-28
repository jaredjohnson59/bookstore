import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../class/book';
import { GenreService } from '../../services/genre.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

@Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
