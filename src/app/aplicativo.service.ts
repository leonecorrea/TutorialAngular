import { Aplicativo } from './aplicativo';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AplicativoService {

  private aplicativosUrl = 'api/aplicativo'; // Url da api

  constructor(
    private http: HttpClient
  ) { }

  /** Get aplicativos do servidor */
  getAplicativos(): Observable<Aplicativo[]> {
    return this.http.get<Aplicativo[]>(this.aplicativosUrl)
      // .pipe(
      //   tap(data => console.log(data)),
      //   catchError()
      // )
      ;
  }

  /** Get aplicativo por id */
  getAplicativo(id: number): Observable<Aplicativo> {
    let url = `${this.aplicativosUrl}/${id}`;
    return this.http.get<Aplicativo>(url);
  }

  /** Mensagem de log */
  private log(mensagem: string){

  }
}
