import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuService } from './menu.service';

import { EntriesComponent } from '../components/entries/entries.component';
import { EntriesService } from '../components/entries/entries.service';

import { EntryDetailComponent } from  '../components/entry-detail/entry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ EntriesService, MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
