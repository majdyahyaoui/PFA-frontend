import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Professeur} from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }
  getProfessorss()  {
    return this.http.get<[Professeur]>('http://localhost:8080/professeur');
  }
  deleteProf(Prof) {
    return this.http.delete('http://localhost:8080/professeur/'+Prof);
  }
  getProfesseurByMat(Mat){
    return this.http.get<[Professeur]>('http://localhost:8080/professeur9/'+Mat)
  }
  getProfbyValide() {
    return this.http.get<[Professeur]>('http://localhost:8080/professeur1');
  }
  updateProf(a,b){
    return this.http.put('http://localhost:8080/professeur/'+a , b) ;
  }
}
