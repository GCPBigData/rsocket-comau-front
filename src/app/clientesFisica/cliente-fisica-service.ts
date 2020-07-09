import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClienteFisica} from './cliente-fisica';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteFisicaService {

  public readonly urlClienteLista = `${environment.urlClienteLista}`;

  constructor(private http: HttpClient) { }

  /*Metodo que OBSERVA o end point que lista os Clientes sem paginacao*/
  getClienteFisica(): Observable<ClienteFisica> {
    return this.http.get<ClienteFisica>(this.urlClienteLista);
  }

}
