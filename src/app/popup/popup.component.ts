import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProfessorService} from '../services/professor.service';
import {Matiere, Professeur} from '../signup/signup.component';
import {ReclamationService} from '../services/reclamation.service';
import {Reclamation} from '../user/user.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  listProf:[Professeur];
  selected;
  constructor(public DialogRef: MatDialogRef<PopupComponent>,
              private professorService: ProfessorService,
              private reclamationService : ReclamationService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              ) { }

  ngOnInit() {
    this.find();
    console.log(this.data.param) ;
    console.log(this.data.param2)
  }

  find(){
    this.professorService.getProfesseurByMat(this.data.param.idMat).subscribe(
        data => {
          this.listProf = data;
          console.log(data);
        }
    );
  }

  closeDiag(a){
    this.reclamationService.affecterReclamation(a,this.data.param2).subscribe(
        data => {
    // this.reclamationService.deleteRec(this.data.param2.idRec).subscribe();
    // this.find();
          }


  );
    this.DialogRef.close();

  }


}
