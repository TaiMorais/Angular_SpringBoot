import { TooltipComponent } from "@angular/material/tooltip";

export interface Tool {
  _id: number;
  nome: string;
  categoria: string;
  //estado_anterior: n sei o tipo;
  //estado_atual: n sei o tipo;
  quantidade: number;
  patrimonio: number;
  disponibilidade: string;
}
