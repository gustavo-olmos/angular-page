import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './courses/list.component';
import { StarsComponent } from './stars/stars.component';

//componentes criados tem que ser declarados no modulo que corresponde a ele (app module é o mod raiz)
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
