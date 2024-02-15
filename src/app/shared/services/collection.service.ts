import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class KoleksiyonService {
  public apiUrl = "https://mesesoft-backend-2ccb39a272e8.herokuapp.com/api/v2"

  constructor(private http: HttpClient) { }

  getKoleksiyons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/koleksiyon/koleksiyons`);
  }
}
