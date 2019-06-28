import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Matiere} from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }

  retriveAllMatiere() {
    return this.http.get<[Matiere]>('http://localhost:8080/matiere');
  }
  postMAtiere(m){
    return this.http.post('http://localhost:8080/matiere' ,m);
  }
}
