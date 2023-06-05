
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "/index.php";

  constructor(private httpClient: HttpClient) { }

  /**
   * tutte le partite
   */
  public leggiCalendario(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?calendario=');
  }

  /**
   * tutte le partite per giornata
   */
  public leggiGiornate(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?calendario=giorni');
  }

  /**
   * tutte le partite per una suadra
   */
  public leggiSquadra(numero: number): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?calendario=squadra');
  }


  public leggiClassifica(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?classifica');
  }


  public giocaGiornata(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?giocaGiornata=random');
  }


  public giocaCampionato(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'?giocaCampionato=random');
  }

}

