import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../services/etudiant.service';
import {Etudiant, Professeur} from '../signup/signup.component';
import {ProfessorService} from '../services/professor.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
listEtudiant: [Etudiant];
listProfs: [Professeur];

  constructor(private etudiantService: EtudiantService,
              private professorService: ProfessorService) { }

  ngOnInit() {
   this.refresh();

  }

  refresh(){
    this.etudiantService.getStudents().subscribe(
        data => {
          this.listEtudiant = data;
        }
    );
    this.professorService.getProfessorss().subscribe(
        data => {
          this.listProfs = data;
        }
    );
  }
  deleteProf(Prof){
    this.professorService.deleteProf(Prof).subscribe(
        data=>{
          this.refresh();
        }
    );
  }
  deleteEtud(E){
    this.etudiantService.deleteEtud(E).subscribe(
        data=>{
          this.refresh();
        }
    );
  }
}
