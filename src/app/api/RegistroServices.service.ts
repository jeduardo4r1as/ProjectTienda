import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class RegistroServices{



    private readonly _hhtp= inject(HttpClient);

    getAllProduct():Observable<any>{
        return this._hhtp.get('https://fakestoreapi.com/products')
    }
}
