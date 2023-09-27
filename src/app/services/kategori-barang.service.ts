import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IKategoriBarang } from '../interfaces/i-kategori-barang';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KategoriBarangService extends BaseService {
  private token = localStorage.getItem("token")

  constructor(private http: HttpClient) {
    super();
  }


  public create(katbarang: IKategoriBarang): Observable<any> {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
    }
    const body = JSON.stringify(katbarang);
    console.log(body)
    return this.http.post<any>(`${environment.baseURL}/katbarang/v1/sv`, body, { headers });
  }

  public update(id: number): Observable<IKategoriBarang> {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.put<IKategoriBarang>(`${environment.baseURL}/katbarang/v1/upd/${id}`, { headers });
  }

  public updateSupplier(katbarang: IKategoriBarang): Observable<IKategoriBarang> {
    const url = `${environment.baseURL}/v1/upd/${katbarang.idKategoriBarang}`;
    return this.http.put<IKategoriBarang>(url, katbarang);
  }


  public delete(id: number): Observable<void> {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
    }
    const url = `${environment.baseURL}/katbarang/v1/del/${id}`;
    return this.http.delete<void>(url, {
      headers
    });
  }


  public all(): Observable<IKategoriBarang[]> {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
    }
    return this.http.get<IKategoriBarang[]>(`${environment.baseURL}/katbarang/v1/findall`, {
      headers,
    });
  }


  public getKatbarangById(id: number): Observable<IKategoriBarang> {
    const url = `${environment.baseURL}/${id}`;
    return this.http.get<IKategoriBarang>(url);
  }

}
