import { Component, OnInit } from '@angular/core';
import { EntriesService } from './entries.service';
import { Entry } from '../../app/entry';

@Component({
  selector: 'entries',
  templateUrl: './entries.component.html'
})
export class EntriesComponent implements OnInit {

  public entries: Entry[];

  constructor(private _entries: EntriesService) {

  }

  ngOnInit() {
    this._entries.get()
    .subscribe( data => this.entries = data );
  }
}
