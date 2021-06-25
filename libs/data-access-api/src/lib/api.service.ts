import { Inject, Injectable } from '@angular/core';
import { Cat, Pageable } from '@juge/type-api';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
    @Inject('apiRoot') private apiRoot: string
  ) {}

  findAllCats_notOptimzed(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.apiRoot, { ...this.httpOptions });
  }

  findAllCats_pageable(pageable: Pageable): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(`${this.apiRoot}/pageable`, {
      ...this.httpOptions,
      params: new HttpParams({ fromObject: pageable }),
    });
  }
}
