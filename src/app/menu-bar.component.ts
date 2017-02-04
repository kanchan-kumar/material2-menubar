import { Component } from '@angular/core';
import { MenuProps } from './interfaces/menu-props';

@Component({
  selector: 'app-root',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  title = 'app works!';
  items: any;
  constructor() {
   this.items = [
     {
       name: 'abc',
       display: 'xyz',
       items: [],
       data: {}
     },
     {
       name: 'abc2',
       display: 'xyz2',
       items: [],
       data: {}
     },
     {
       name: 'abc3',
       display: 'xyz3',
       items: [],
       data: {}
     },
     {
       name: 'abc4',
       display: 'xyz4',
       items: [],
       data: {}
     },
     {
       name: 'abc5',
       display: 'xyz5',
       items: [],
       data: {}
     }
   ];
  }

}
