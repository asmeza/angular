import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CarruselComponent } from './components/layouts/carrusel/carrusel.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FormUserComponent } from './components/user/form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CarruselComponent,
    FooterComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
