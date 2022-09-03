import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { TitleComponent } from './components/title/title.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    TitleComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
