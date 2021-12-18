import { Component, EventEmitter, Output } from '@angular/core';

import { ITransferencia } from '../extrato/ITransferencia';
import { Router } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter();
  valor: number = 0;
  destino: number = 0;

  constructor(
    private readonly service: TransferenciaService,
    private readonly router: Router
  ) {}

  public transferir(): void {
    console.log('Solicitada nova transferência');

    const valorEmitir: ITransferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  public limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
