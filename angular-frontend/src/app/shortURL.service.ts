import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ShortURL } from './shortURL';

@Injectable({
  providedIn: 'root'
})
export class ShortURLService {

  private baseURL = "http://localhost:8080/api/v1/shortURL";

  constructor(private httpClient: HttpClient) { }
  
  getShortURLsList(): Observable<ShortURL[]>{
    return this.httpClient.get<ShortURL[]>(`${this.baseURL}`);
  }

  createShortURL(shortURL: ShortURL): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, shortURL);
  }

  getShortURLById(id: number): Observable<ShortURL>{
    return this.httpClient.get<ShortURL>(`${this.baseURL}/${id}`);
  }

  updateShortURL(id: number, shortURL: ShortURL): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, shortURL);
  }

  deleteShortURL(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
