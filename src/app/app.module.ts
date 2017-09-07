import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
//import { Ng2PaginationModule } from 'ng2-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquipamentsModule } from './equipaments/equipaments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EquipamentsModule,
    NgxPaginationModule//,
    //Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
