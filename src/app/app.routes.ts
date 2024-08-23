import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DetalleproductosComponent } from './pages/detalleproductos/detalleproductos.component';
import { Error404Component } from './pages/error404/error404.component';



export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'productos', component:ProductosComponent},
    {path:'nosotros', component: NosotrosComponent},
    {path:'detalleproductos', component:DetalleproductosComponent},
    {path:'detalleproductos/:id', component: DetalleproductosComponent },
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'**', component:Error404Component},


    

];
