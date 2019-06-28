import { Injectable } from '@angular/core';
import {Etudiant} from '../signin/signin.component';
import {Professeur} from '../signup/signup.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  ajouterEtudiant(etudiant) {
    return this.http.post('http://localhost:8080/etudiant', etudiant);
  }
  ajouterProf(prof) {
    return this.http.post('http://localhost:8080/professeur', prof);
  }

  getEtudiantbyMail(addMail) {
    return this.http.get<Etudiant>('http://localhost:8080/etudiant/' + addMail);
  }
  getProfbyMail(addMail) {
    return this.http.get<Professeur>('http://localhost:8080/professeur2/' + addMail );
  }

  // findUser(adresse, password) {
  //   return this.http.get<User>(http://localhost:8080/User/${adresse}/${password});
  // }
}
