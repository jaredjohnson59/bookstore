import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import {Genre} from '../../class/Genre';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  private genre: Genre = {name: " "};

  constructor(private genreService: GenreService) { }

  ngOnInit() {
  }

  createGenre(){
    if(this.genre) this.genreService.createGenre(this.genre);
  }

}
