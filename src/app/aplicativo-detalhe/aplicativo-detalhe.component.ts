import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AplicativoService } from '../aplicativo.service';

@Component({
  selector: 'app-aplicativo-detalhe',
  templateUrl: './aplicativo-detalhe.component.html',
  styleUrls: ['./aplicativo-detalhe.component.css']
})
export class AplicativoDetalheComponent implements OnInit {
  aplicativo: any = {nome: '', key: ''};
  keyParam: number;
  nome: string;

  constructor(private route: ActivatedRoute, private appService: AplicativoService) {
    this.route.params.subscribe((value) => {
      this.keyParam = value.key;
    });
  }

  ngOnInit() {
    
  }

  editar(){
    
  }

}
