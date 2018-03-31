import { Component, AfterViewInit, ElementRef } from '@angular/core';
var jQuery: any;

@Component({
  selector: 'bootstrap-datepicker',
  templateUrl: './bootstrap-datepicker.html'
})
export class BootstrapDatepickerComponent implements AfterViewInit {

  $datepicker;

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit() {
    jQuery( this.el.nativeElement ).datepicker();
  }
}
