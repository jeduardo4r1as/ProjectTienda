import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { Observable } from "rxjs";
import { OrdenDeCompra } from "../model/OrdenDeCompra.model";

@Injectable({providedIn: 'root'})
export class PagoServices{


  private api= 'xxxxxxxxxx';
  private readonly _hhtp = inject(HttpClient);

  enviarOrden(ordenDeCompra:OrdenDeCompra):Observable<any>{
    return this._hhtp.post<any>(this.api,ordenDeCompra);
  }

}
