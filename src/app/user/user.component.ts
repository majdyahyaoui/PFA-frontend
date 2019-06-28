import { Component, OnInit } from '@angular/core';
import {Matiere} from '../signup/signup.component';
import {MatiereService} from '../services/matiere.service';
import {Router} from '@angular/router';
import {ReclamationService} from '../services/reclamation.service';
import {EvaluationServiceService} from '../services/evaluation-service.service';
import {Evaluation} from '../insertnote/insertnote.component';
export class Reclamation {
  constructor(
      public idRec?: number,
      public matiere?: {},
      public type?: string,
      public idEtud?: {},
      public note?: number,
      public note2?: number,
      public examenOrDs?: string,
      public idProf?: number,
  ) {}
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user;
  matiere;
  listMatiere: [Matiere];
  listEva: [Evaluation];
  rec: Reclamation = new Reclamation();

  constructor(private matiereService: MatiereService,
              private router: Router,
              private reclamationService: ReclamationService,
              private evaluationService: EvaluationServiceService,

  ) { }
  selected = null;
  selected1 = null;


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
    this.matiereService.retriveAllMatiere().subscribe(
        data => {
          this.listMatiere = data;
        }
    );
    this.getNote(this.user.idEtud);
  }
  cc() {
    console.log('aaa');
    console.log(this.selected);
  }
  Logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }

  reclamation(){
    this.rec.idEtud = JSON.parse(sessionStorage.getItem('user'));
    this.rec.matiere = this.matiere;
    this.rec.idProf = 0;
    if (this.selected == 1) {this.rec.type = "doubleCorrecction";} else {this.rec.type= "verifyNote";}
    if (this.selected1 == 1) {this.rec.examenOrDs = "Examen";} else {this.rec.examenOrDs= "Ds";}

    this.reclamationService.postreclamation(this.rec).subscribe(
        data => {
          console.log(data); }
    );

  }

  getNote(a){
    this.evaluationService.getEvaluationByetud(a).subscribe(
        data => {
          this.listEva = data;
        }
    )
  }
}
