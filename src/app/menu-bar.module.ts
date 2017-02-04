import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuBarComponent } from './menu-bar.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MenuBarComponent]
})
export class MenuBarModule { }
