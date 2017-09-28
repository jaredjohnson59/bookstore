import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBooksComponent } from './components/create-books/create-books.component';

import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { APIService } from './services/api.service';
import { BookService } from './services/book.service';
import { GenreService } from './services/genre.service';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { CreateGenreComponent } from './components/create-genre/create-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ViewBooksComponent,
    HomeComponent,
    CreateBooksComponent,
    UpdateBookComponent,
    CreateGenreComponent
  ],
  imports: [
    FlashMessagesModule,
    FormsModule,
    BrowserModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(APIService)
  ],
  providers: [BookService, GenreService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
