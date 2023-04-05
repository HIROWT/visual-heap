import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeapService {

  constructor(private http:HttpClient) { }

  public getRoot(): Observable<any>{
    return this.http.get<any>("http://localhost:8081/r/root");
  }

  public insert(nodeValue:number){
    return this.http.post("http://localhost:8081/r/add", nodeValue)
  }
}

export class LLnode{
  info:number;
  leftlink:LLnode;
  rightlink:LLnode;
}


