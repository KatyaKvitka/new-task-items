import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation.component';
import { ItemsComponent } from './components/items.component';
import { MessagesComponent } from './components/messages.component';

import { MaterialModule,MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemsComponent,
    MessagesComponent
  ],
  
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
