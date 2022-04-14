import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Data } from "../models/data";
import { global } from "./global";

@Injectable()
export class DataService {
    public url: string;

    constructor (
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    send(data:any): Observable<any> {
        let json = JSON.stringify(data);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'answer', params, {headers: headers});
    }
}