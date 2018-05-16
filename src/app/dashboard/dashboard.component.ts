import { Component, OnInit } from '@angular/core';
import { AplicativoService } from '../_services/aplicativo.service';
import { Aplicativo } from '../_classes/aplicativo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aplicativos: Array<Aplicativo> = []; // Declarações

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
