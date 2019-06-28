import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reclamation} from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }

  getReclamation(){
    return this.http.get<[Reclamation]> ('http://localhost:8080/reclamation');
  }

  postreclamation(rec){
    return this.http.post('http://localhost:8080/reclamation' , rec);
  }

  affecterReclamation(a,b) {
    return this.http.put('http://localhost:8080/reclamation/' + a , b);
  }

  getRecByIdProf(rec){
    return this.http.get<[Reclamation]> ('http://localhost:8080/reclamation1/' + rec);
  }
  deleteRec(id){
    return this.http.delete('http://localhost:8080/reclamation/'+id);
  }
}
