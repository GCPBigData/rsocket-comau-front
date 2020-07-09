import { Component, OnInit } from '@angular/core';
import {ClienteFisicaService} from './cliente-fisica-service';
import {HttpClient} from '@angular/common/http';
import {ClienteFisica} from './cliente-fisica';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientesFisica.component.html',
  styleUrls: ['./clientesFisica.component.css']
})
export class ClientesFisicaComponent implements OnInit {

  responseClienteFisica: ClienteFisica;
  results$;

  constructor(
      private clienteFisicaService: ClienteFisicaService,
      private http: HttpClient) { }

  ngOnInit(): void {
    this.clienteFisicaService.getClienteFisica().subscribe(
      res => this.responseClienteFisica = res
    );
  }

}
