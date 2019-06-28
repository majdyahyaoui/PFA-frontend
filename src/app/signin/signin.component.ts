import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var $: any;

export class Etudiant {
  constructor(
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
export class Professeur {
  constructor(
      public nom?: string,
      public prenom?: string,
      public addMail?: string,
      public numTel?: string,
      public cin?: string,
      public password?: string,
      public valide?: string,

      public matiere?: {}

  ) {}
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  etudiant: Etudiant = new Etudiant();
  prof: Professeur = new Professeur();
  mail ;
  passwd;
  constructor(private connectionService: ConnectionService,
              private router: Router,
              private route : ActivatedRoute) { }
  ngOnInit() {
  }
  login() {

      if (this.mail ==="majd@gmail.com" && this.passwd==="123") { this.router.navigate(['/admin']  )}
      else{

          this.connectionService.getEtudiantbyMail(this.mail).subscribe(
              data => {
                  this.etudiant = data;
                  if (this.etudiant.valide !== null){
                      if(this.etudiant.valide === "0" ){this.showNotification('top','center') }
                      else{
                          if (this.passwd === data.password ) {
                              console.log('ok etudiant!!');
                              sessionStorage.setItem('user', JSON.stringify(data));
                              this.router.navigate(['user']);
                          }
                          else {this.showNotification1('bottom','center')}} }});

          this.connectionService.getProfbyMail(this.mail).subscribe(
              data => {
                  this.prof = data; console.log(data);

                  if (this.passwd === data.password) {
                      console.log('ok professor');
                      sessionStorage.setItem('user', JSON.stringify(data));
                      this.router.navigate(['professorProfile']);
                         }
                  else {this.showNotification1('bottom','center')}


              }
          );





  }}
    signup(){
        this.router.navigate(['sign-up']);
    }
    showNotification(from, align){
        const type = ['','info','success','warning','danger'];

        // const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: " Still waiting to accept your sign up "
        },{
            type: type[3],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notification</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    }
    showNotification1(from, align){
        const type = ['','info','success','warning','danger'];

        // const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "notifications",
            message: " verify your password "
        },{
            type: type[3],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">error</i> ' +
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
