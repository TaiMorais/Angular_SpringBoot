import { Tool } from './../model/tool';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, take, delay,} from 'rxjs/operators';
import { tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ToolsService {


  private readonly API = 'api/tools';

  //injeção de dependencia
  constructor(private httpClient: HttpClient) {}

  //metodo que vai retornar uma lista de ferramentas para o componente
  findAll() {
    return this.httpClient.get<Tool[]>(this.API)
    .pipe(
      first(),
      delay(700),
      tap(tools => console.log(tools))
    );
    //retorna um observable
  }
}
