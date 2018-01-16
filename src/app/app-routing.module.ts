import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntriesComponent } from '../components/entries/entries.component';
import { EntryDetailComponent } from '../components/entry-detail/entry-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesComponent },
  { path: 'entry-detail', component: EntryDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
