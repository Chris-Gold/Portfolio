import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { SpecInterface } from "./spec-interface";
import { BatInterface } from "./bat-interface";
import { ComInterface } from "./com-interface";

@Injectable()
export class ApiService {

  private specURL = "http://localhost:3000/spectacle";
  private batURL = "http://localhost:3000/batiment";
  private comURL = "http://localhost:3000/commerce";

  constructor(private http: Http) { }

  getSpec(): Observable<SpecInterface[]>{
    return this.http
     .get(this.specURL)
     .map((response: Response)=> {
       return <SpecInterface[]>response.json();
     })
     .catch(this.handleError);
  }
  getBat(): Observable<BatInterface[]>{
    return this.http
     .get(this.batURL)
     .map((response: Response)=> {
       return <BatInterface[]>response.json();
     })
     .catch(this.handleError);
  }
  getCom(): Observable<ComInterface[]>{
    return this.http
     .get(this.comURL)
     .map((response: Response)=> {
       return <ComInterface[]>response.json();
     })
     .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
