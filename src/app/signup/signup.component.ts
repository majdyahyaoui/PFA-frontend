import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ConnectionService} from '../services/connection.service';
import {ClasseService} from '../services/classe.service';
import {MatiereService} from '../services/matiere.service';
import {Router} from '@angular/router';
declare var $: any;

export class Etudiant {
  constructor(
      public idEtud?: number,
      public nom?: string,
      public prenom?: string,
      public addMail?: string,
      public numTel?: string,
      public cin?: string,
      public password?: string,
      public valide?: string,
      public idClasse?: {}
  ) {}
}

export class Classe {
  constructor(
      public idclasse?: number,
      public cycle?: string,
      public niveau?: string,
      public amphi?: string
  ) {}

}

export class Professeur {
  constructor(
      public idProf?: number,
      public nom?: string,
      public prenom?: string,
      public addMail?: string,
      public numTel?: string,
      public cin?: string,
      public password?: string,
      public valide?: string,
      public matiere?: {},
  public idClasse?: {}


) {}
}

export class Matiere {
  constructor(
      public idMat?: number,
      public coefficient?: number,
      public idMod?: number,
      public nomMat?: string,
  ) {}

}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  prof: Professeur = new Professeur();
  listClasse: [Classe];
  listMatiere: [Matiere];

  selected = null;
  classe;
  matiere;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private connectionService: ConnectionService ,
              private classeService: ClasseService,
              private router: Router,
              private matiereService: MatiereService
  ) { }

  cc() {
    console.log(this.selected);
  }
  ngOnInit() {
    this.classeService.retriveAllClasse().subscribe(
        data => {
          this.listClasse = data;
        }
    );
    this.matiereService.retriveAllMatiere().subscribe(
        data => {
          this.listMatiere = data;
        }
    );
  }


  connetion() {
    if ( this.selected === 'Student' ) {
      console.log(this.classe);
      this.etudiant.idClasse = this.classe;
      this.etudiant.valide = '0';
      this.connectionService.ajouterEtudiant(this.etudiant).subscribe(
          data => {
            console.log(data);
          }
      );
      this.router.navigate(['']);

    }
    else if ( this.selected === 'Professor' ){
      console.log(this.matiere);
      this.prof.matiere = this.matiere;
      this.prof.valide = '0';


      this.connectionService.ajouterProf(this.prof ).subscribe(
          data => {
            console.log(data); }
      );
      this.router.navigate(['']);

    }
    else{
      this.showNotification('top' , 'center')
    }

  }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];


    $.notify({
      icon: "notifications",
      message: "check your data"

    },{
      type: type[4],
      timer: 4000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">warning</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
    });
  }

}
