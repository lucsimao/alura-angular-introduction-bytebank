import { HttpClient } from '@angular/common/http';
import { ITransferencia } from './../extrato/ITransferencia';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDeTransferencias: ITransferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private readonly httpClient: HttpClient) {
    this.listaDeTransferencias = [];
  }

  get transferencias() {
    return this.listaDeTransferencias;
  }

  public adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    const result = this.httpClient.post<ITransferencia>(
      this.url,
      this.hidratar(transferencia)
    );

    return result;
  }

  public todas(): Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  private hidratar(transferencia: ITransferencia): ITransferencia {
    return { ...transferencia, data: new Date() };
  }
}
