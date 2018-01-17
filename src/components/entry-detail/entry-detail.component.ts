import { Component } from '@angular/core';

@Component({
  selector: 'entry-detail',
  templateUrl: './entry-detail.html'
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
