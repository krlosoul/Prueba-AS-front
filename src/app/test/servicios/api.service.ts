import { Injectable } from '@angular/core';
import { Data } from "../modelos/data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private data: Data = { permit_type : "", location: { coordinates : [] } };
  private TestUrl = "http://127.0.0.1:8000/test?"; 

  constructor(private http: HttpClient) {}

  public getData(page: number, size: number): Observable<Data> {
    return this.http.get<Data>(this.TestUrl+ `page=${page}&size=${size}`);
  }
}