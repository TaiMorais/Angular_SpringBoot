import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', pathMatch:'full', redirectTo: 'ferramentas'},

//rota de lazy loading
  {
    path: 'ferramentas',
    loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
    //caminho onde está o modulo filho: /app;tools/tools.module e dentro desse arquivo filho temos o Tools Module declarado
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
