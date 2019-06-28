import {Component, Inject, OnInit} from '@angular/core';
import {Classe, Etudiant, Matiere,} from '../signup/signup.component';
import {EtudiantService} from '../services/etudiant.service';
import {EvaluationServiceService} from '../services/evaluation-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ClasseService} from '../services/classe.service';

export class Evaluation {
  constructor(
      public idEva?: number,
      public note?: number,
      public idEtud?: {},
      public matiere?: {},
      public amphi?: {},

  ) {}
}


@Component({
  selector: 'app-insertnote',
  templateUrl: './insertnote.component.html',
  styleUrls: ['./insertnote.component.scss']
})
export class InsertnoteComponent implements OnInit {
var;
  listEtudiant: [Etudiant];
  listClasse: [Classe];
  // e : Etudiant = new Etudiant();
  // c : Classe = new Classe();
  c ; e;
selected = null;
  constructor(private etudiantService: EtudiantService,
              private classeService: ClasseService,
              private evaluationService: EvaluationServiceService,
              public DialogRef: MatDialogRef<InsertnoteComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: Matiere
              ) { }
  ngOnInit() {
    this.refresh();


  }
  refresh() {
    this.classeService.retriveAllClasse().subscribe(
        data => {
          this.listClasse = data ;
        }
    )
  }
  getEtudByClasse(i){
    console.log(this.selected);
    this.etudiantService.getEtudiantByClasse(i).subscribe(
        data1 => {
          this.listEtudiant = data1;
        }
    );

  }
  close(){
    this.DialogRef.close();
  }


  insererNote(c , e){
    var evaluation: Evaluation = new Evaluation();

    evaluation.matiere = this.data;
    evaluation.amphi = c;
    evaluation.idEtud = e;
    evaluation.note = this.var;
    console.log("ok");
    this.evaluationService.postNote(evaluation).subscribe(
        data => {
          console.log(data); }
    );

  }

}
