import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Matiere} from '../signup/signup.component';
import {InsertnoteComponent} from '../insertnote/insertnote.component';
import {Router} from '@angular/router';
import {EvaluationServiceService} from '../services/evaluation-service.service';
import {UpdateNoteComponent} from '../update-note/update-note.component';
import {ReclamationService} from '../services/reclamation.service';
import {Reclamation} from '../user/user.component';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.scss']
})
export class ProfessorProfileComponent implements OnInit {
user ;
listRec: [Reclamation];
  constructor(private dialog: MatDialog,
              private router: Router,
              private reclamationService: ReclamationService,
              private evaluationService : EvaluationServiceService,) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
    this.refresh();
  }

  diag(param: Matiere ){
    const dialogRef = this.dialog.open(InsertnoteComponent, {
      width: '600px',
      data: param
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  diag1(param: number , param2: Matiere ){
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      data:  {param,param2}

  });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  refresh() {
    this.reclamationService.getRecByIdProf(this.user.idProf).subscribe(
        data1 => {
          this.listRec = data1;
        }
    );
  }

  delete(id){
    this.reclamationService.deleteRec(id).subscribe(
        data => {
          this.refresh();

        }
    );
  }

  Logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }



}
