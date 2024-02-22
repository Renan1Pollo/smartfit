import { UnitsResponse } from './../types/units-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  getAllUnits(): Observable<UnitsResponse> {
    return this.http.get<UnitsResponse>(this.apiUrl);
  }
}
