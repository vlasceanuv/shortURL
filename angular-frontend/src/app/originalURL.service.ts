import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ShortURL } from './shortURL';

@Injectable({
  providedIn: 'root'
})
export class OriginalURLService {

  private baseURL = "http://localhost:8080/api/v1/originalURL";

  constructor(private httpClient: HttpClient) { }
  
  getOriginalURLByShortURL(shortURL: String): Observable<ShortURL> {
    return this.httpClient.get<ShortURL>(`${this.baseURL}/${shortURL}`);
  }
}
