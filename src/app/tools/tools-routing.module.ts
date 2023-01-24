import { ToolFormComponent } from './tool-form/tool-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', component: ToolsComponent },
  { path: 'new', component: ToolFormComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
