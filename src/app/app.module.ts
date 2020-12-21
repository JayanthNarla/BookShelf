import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { MainappComponent } from './components/mainapp/mainapp.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { BestselleritemsComponent } from './components/bestselleritems/bestselleritems.component';
import { BodComponent } from './components/bod/bod.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthoritemComponent } from './components/authoritem/authoritem.component';
import { FreebooksComponent } from './components/freebooks/freebooks.component';
import { FreebookitemComponent } from './components/freebookitem/freebookitem.component';
import { BodcardComponent } from './components/bodcard/bodcard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    MainappComponent,
    SearchbarComponent,
    HeroComponent,
    BestsellersComponent,
    BestselleritemsComponent,
    BodComponent,
    AuthorsComponent,
    AuthoritemComponent,
    FreebooksComponent,
    FreebookitemComponent,
    BodcardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
