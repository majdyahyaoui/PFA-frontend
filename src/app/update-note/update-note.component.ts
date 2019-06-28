import {Component, Inject, OnInit} from '@angular/core';
import {EvaluationServiceService} from '../services/evaluation-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Etudiant, Matiere} from '../signup/signup.component';
import {Evaluation} from '../insertnote/insertnote.component';
import {ReclamationService} from '../services/reclamation.service';
import {Reclamation} from '../user/user.component';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
c;e;
noteMdf;
// evaluation ;
  listRec: [Reclamation];
  listEvaluation: [Evaluation];
  listEvaluation1: [Evaluation];

  evaluation: Evaluation = new Evaluation()
  constructor(private reclamationService: ReclamationService,
              private evaluationService: EvaluationServiceService,
              public DialogRef: MatDialogRef<UpdateNoteComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit() {
    this.refresh(this.data.param);
    this.geteva();
  }


  refresh(i) {
    this.reclamationService.getRecByIdProf(i).subscribe(
        data1 => {
          this.listRec = data1;
        }
    );
  }
  geteva(){
    this.evaluationService.getEvaByMatandETud(this.data.param,this.data.param2).subscribe(
        data => {
          this.listEvaluation1 = data;
          console.log(this.listEvaluation1);
          console.log("aaa");
        }
    )
  }


  updateNote(a){
    // this.evaluationService.getEvaByMatandETud(this.data.param , this.data.param2).subscribe(
    //     data => {
    //       this.listEvaluation = data;
    //     }
    // );

    // for (var char of this.listEvaluation){
    //   if (char.matiere)
    // }
    console.log("ok");

    this.evaluationService.updateNote(a, this.noteMdf).subscribe(
        data => {
          console.log(data);

        }
    );
    this.DialogRef.close();

  }

}
