import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imporamos el componente del carrusel que queremos usar como ventana principal 
import { CarruselComponent } from './components/layouts/carrusel/carrusel.component';

//imporamos el componente del usuario
import { FormUserComponent } from './components/user/form-user/form-user.component';

const routes: Routes = [
  
  //primero indicamos la  ruta inicial de nuetro proyecto 
  {
    path: '', 
    redirectTo: 'home', // le indicamos que cuando nuestro proyecto inicie iniciara en la ruta home
    pathMatch: 'full'
  },

  //indicamos la ruta home, es decir cuando en el navegador se ejecute la ruta home
  //me mostrara el contenido de component del carrusel.
  {
    path: 'home',
    component:CarruselComponent
  },
  //creamos nuestra ruta del componente usuario
  {
    path: 'user',
    component: FormUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }