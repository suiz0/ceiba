import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'entry-detail',
  templateUrl: './entry-detail.html',
  styleUrls: ['./entry-detail.scss']
})
export class EntryDetailComponent {

  public isTimeLimited: boolean = false;

  public toggleTimeLimited(isVisible?: boolean) {

    if ( isVisible === undefined ) {
        this.isTimeLimited = ! this.isTimeLimited;
    } else {
      this.isTimeLimited = isVisible;
    }
  }
}
