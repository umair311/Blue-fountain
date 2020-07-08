import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{ReactiveFormsModule} from '@angular/forms';
import { SubservicePageComponent } from './subservice-page/subservice-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SubServCatComponent } from './sub-serv-cat/sub-serv-cat.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    SubservicePageComponent,
    SubServCatComponent,
   
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
