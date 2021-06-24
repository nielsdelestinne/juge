import { Inject, Injectable } from '@angular/core';
import { Cat } from '@juge/type-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient, @Inject('apiRoot') private apiRoot: string) {
  }

  findAllCats_notOptimzed(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.apiRoot, {...this.httpOptions})
  }
}
