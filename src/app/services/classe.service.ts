import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Classe} from '../signup/signup.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  retriveAllClasse()  {
    return this.http.get<[Classe]>('http://localhost:8080/classe');

  }
  postClasse(Classe){
    return this.http.post('http://localhost:8080/classe/' , Classe);
}
}
