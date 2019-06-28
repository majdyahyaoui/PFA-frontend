import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Evaluation} from '../insertnote/insertnote.component';

@Injectable({
  providedIn: 'root'
})
export class EvaluationServiceService {

  constructor(private http: HttpClient) { }

  getNote() {
    return this.http.get<[Evaluation]>('http://localhost:8080/evaluation');
  }
  postNote(m){
    return this.http.post('http://localhost:8080/evaluation' ,m);
  }
  getEvaluationByetud(a){
    return this.http.get<[Evaluation]>('http://localhost:8080/evaluation5/' + a);
  }

  updateNote(e,note){
    return this.http.put('http://localhost:8080/evaluation/' + note , e)
  }
  getEvaByMatandETud(a,b){
    return this.http.get<[Evaluation]> ('http://localhost:8080/evaluation/' + a +'/' +b );
  }
}
