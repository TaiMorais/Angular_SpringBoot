//import { ErrorDialogComponent } from './../../error-dialog/error-dialog.component';

import { ToolsService } from './../services/tools.service';
//import { ToolsComponent } from './tools.component';
//import { Tools } from './../model/tools';
import { Tool } from './../model/tool';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { first, take, delay,} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

   materiais$: Observable<Tool[]>;
  displayedColumns = ['nome','categoria','disponibilidade', 'actions'];

  //ferramentasService: ToolsService;



  constructor(private ferramentasService: ToolsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
     ) {

    this.materiais$ = this.ferramentasService.findAll()
    .pipe(
      catchError(error => {
        this.openDialog('Erro ao carregar ferramentas')
        return of ()
      })
    );
  }

  openDialog(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
    console.log(errorMsg)

  }


  ngOnInit(): void {
  }

  onAdd(){
    console.log('onAdd');
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
