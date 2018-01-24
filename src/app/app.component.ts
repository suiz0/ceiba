import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('navbarToogler') navbarBtn: ElementRef;

  constructor(menu: MenuService) {
    menu.closeEmitted.subscribe( () => {
      if ( ! this.navbarBtn.nativeElement.classList.contains( 'collapsed' ) ) {
          this.collapseNav();
      }
    } );
  }

  collapseNav() {
    this.navbarBtn.nativeElement.click();
  }
}
