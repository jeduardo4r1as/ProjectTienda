import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagoComponent } from './pages/pago/pago.component';

export const routes: Routes = [
    {path:'home',
    component:HomeComponent
    },
    {path:'carrito',
    component:CarritoComponent
    },
    {path:'login',
    component:LoginComponent
    },
    {path:'productos-detalle',
    component:ProductoDetalleComponent
    },
    {path:'productos',
    component:ProductosComponent
    },
    {path:'registro',
    component:RegistroComponent
    },
    {path:'pago',
    component:PagoComponent
    },
    {path:'**',
    component:HomeComponent
    },
];
