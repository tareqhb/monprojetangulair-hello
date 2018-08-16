import { Injectable } from '@angular/core';
import { Iproduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  URL =  'http://localhost:8080/produits';
  constructor(private _http: HttpClient) {}

  getProduits(): Observable<Iproduit[]> {
  return this._http.get<Iproduit[]>(this.URL);
    // return [
    //   { code: 'p100', titre: 'Cafe', prixUnitaire: 5.5 },
    //   { code: 'p200', titre: 'Ice-Thé', prixUnitaire: 4.5 },
    //   { code: 'p300', titre: 'Jus', prixUnitaire: 7.5 }
    // ];
  }
}
