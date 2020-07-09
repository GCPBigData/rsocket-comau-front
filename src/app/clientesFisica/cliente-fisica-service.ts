import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClienteFisica, RequestClienteFisica} from './cliente-fisica';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteFisicaService {

  public readonly urlClienteFisicaLista    = `${environment.urlClienteFisicaLista}`;
  public readonly ClienteFisicaURLfindNome = `${environment.ClienteFisicaURLfindNome}`;
  public readonly ClienteFisicaURLfindId   = `${environment.ClienteFisicaURLfindId}`;
  public readonly ClienteFisicaURLInsert   = `${environment.ClienteFisicaURLInsert}`;
  public readonly ClienteFisicaURLPut      = `${environment.ClienteFisicaURLPut}`;

  constructor(private http: HttpClient) { }

  /*Metodo que OBSERVA o end point que lista os Clientes sem paginacao*/
  getClienteFisica(): Observable<ClienteFisica> {
    return this.http.get<ClienteFisica>(this.urlClienteFisicaLista);
  }

  getId(id: string) {
    return this.http.get(`${this.ClienteFisicaURLfindId}${id}`);
  }

  getNome(nome: string) {
    return this.http.get(`${this.ClienteFisicaURLfindNome}${nome}`);
  }

  createClienteFisica(request: RequestClienteFisica): Observable<ClienteFisica> {
    return this.http.post<ClienteFisica>(this.ClienteFisicaURLInsert, request);
  }

  updateClienteFisica(id: string, data: string) {
    return this.http.put(`${this.ClienteFisicaURLPut}${id}`, data);
  }
}
