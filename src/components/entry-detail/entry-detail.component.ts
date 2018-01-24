import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MenuService } from '../../app/menu.service';

@Component({
  moduleId: module.id,
  selector: 'entry-detail',
  templateUrl: './entry-detail.html',
  styleUrls: ['./entry-detail.scss']
})
export class EntryDetailComponent {

  public isTimeLimited: boolean = false;

  constructor(private _router: Router, private _menu: MenuService) {

  }

  public toggleTimeLimited(isVisible?: boolean) {

    if ( isVisible === undefined ) {
        this.isTimeLimited = ! this.isTimeLimited;
    } else {
      this.isTimeLimited = isVisible;
    }
  }

  public goToHome() {
    this._menu.close();
    this._router.navigate(['/']);
  }
}
