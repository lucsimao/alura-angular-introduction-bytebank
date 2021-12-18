import { Component, OnInit } from '@angular/core';

import { ITransferencia } from './ITransferencia';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias!: ITransferencia[];

  constructor(private readonly service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: ITransferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
