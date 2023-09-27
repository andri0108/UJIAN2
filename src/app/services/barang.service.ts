import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBarang } from '../interfaces/i-barang';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Barang } from '../models/barang';

@Injectable({
  providedIn: 'root'
})

export class BarangService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://c701-223-255-229-67.ngrok-free.app';
  private accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbGFAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGVkMzQzNjcxMzNmZDZkMjMxZWNiIiwiaWF0IjoxNjk1NjA4MjA5LCJleHAiOjE3MDI4MDgyMDl9.AyheZHiR-YRP60Jk39ic0CzIj9O7ZShTwR-Q_DtPEO8';

  // protected baseURL: string = "http://da24-114-124-204-200.ngrok-free.app/barang/get";
  // protected baseURL: string = "https://fakestoreapi.com/products";
  
  
  all(): Observable<any[]> {
    
    const headers = new HttpHeaders().set('x-access-token', this.accessToken);
    return this.http.get<any[]>(`${this.apiUrl}/suppliers/`, { headers })
  }
  // http://localhost:8080/api/barang/v1/findall

  // post(obj: any): Observable<any> {
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + localStorage.getItem("token")
  //   };
  //   const body = JSON.stringify(obj);
  //   return this.http.post<any[]>(`${environment.baseURL}/api/barang/v1/sv`, body, { headers })
  // }
  // deleteBarang(idBarang:Number){
    
    
  
  //   const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization':'Bearer '+localStorage.getItem("token")
  // };
  //   return this.http.delete<any[]>(`${environment.baseURL}/api/barang/v1/del/${idBarang}`,{headers})

  // }
  // updateBarang(barang: any): Observable<any> {
  //   const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer ' + localStorage.getItem("token")
  // };
  //   const url = `${environment.baseURL}/barang/v1/upd/${barang.idBarang}`;
  //   return this.http.put<any[]>(url, barang,{headers});
  // }
  
}
