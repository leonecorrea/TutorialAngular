import { Aplicativo } from './../aplicativo';
import { Component, OnInit } from '@angular/core';
import { AplicativoService } from '../aplicativo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  aplicativos: Aplicativo[] = [];

  constructor(private aplicativoService: AplicativoService) { }

  ngOnInit() {
    this.getAplicativos();
  }

  /** Get dos aplicativos */
  getAplicativos(): void {
    this.aplicativoService.getAplicativos()
      .subscribe(aplicativos => this.aplicativos = this.aplicativos.slice(1, 5));
  }

}
