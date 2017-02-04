import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MenuProps } from '../../interfaces/menu-props';

@Component({
  selector: 'k2d-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

 @Input() menuItems: MenuProps[] = null;
 @Input() menuWidth: number = 50;
 @Input() menuHeight: number = 100; /* Per Item. */
 @Input() zindex: number = 1;
 @Input() menuClass: string = 'a2kMenu';
 @Input() menuSubClass: string = 'a2kmenu-menu-inner';
 @Input() menuItemClass: string = 'a2kmenu-item';

 constructor() {
  }

  ngOnInit() {
    console.log('Input recieved on init ... ', this.menuItems);
  }
  ngOnChanges() {
    console.log('Input recieved on change ... ', this.menuItems);
    console.log(this.menuWidth, this.menuHeight);
  }
}


