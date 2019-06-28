import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }
  getStudents()  {
    return this.http.get<[Etudiant]>('http://localhost:8080/etudiant');
  }
  deleteEtud(E)
  {
    return this.http.delete('http://localhost:8080/etudiant/'+E);
  }
  getEtudiantbyValide() {
    return this.http.get<[Etudiant]>('http://localhost:8080/etudiant1' );
  }
  updateStudent(a,b){
     return this.http.put('http://localhost:8080/etudiant/'+a , b) ;
  }
  getEtudiantByClasse(i){
    return this.http.get<[Etudiant]>('http://localhost:8080/etudiant3/' + i);
  }
}
