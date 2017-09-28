// ====== ./app/app.routes.ts ======

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBooksComponent } from './components/view-books/view-books.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBooksComponent } from './components/create-books/create-books.component';
import { CreateGenreComponent } from './components/create-genre/create-genre.component';

// Route Configuration
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'viewBooks', component: ViewBooksComponent },
  { path: 'createBooks', component: CreateBooksComponent },
  { path: 'createGenre', component: CreateGenreComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
