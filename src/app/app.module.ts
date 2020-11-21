import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { FormsModule } from '@angular/forms';
import { NewoneService } from './newone/newone.service';

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
