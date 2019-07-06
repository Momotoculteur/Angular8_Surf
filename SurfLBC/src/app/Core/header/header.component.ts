import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Acheter',
        link: 'acheter',
        index: 0
      }, {
        label: 'Vendre',
        link: 'vendre',
        index: 1
      }
    ];

  }

  ngOnInit() {
  }

}
