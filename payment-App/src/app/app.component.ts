import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isRecord: boolean = false;
  customer: any;

  constructor(private cd: ChangeDetectorRef) { }
  ngOnInit() {
    if (window['customer']) {
      this.isRecord = true;
      this.customer = window['customer'];
      this.cd.detectChanges();
    }
    this.cd.detectChanges();
  }
}

