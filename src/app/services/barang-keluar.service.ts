import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IBarangKeluar } from '../interfaces/i-barang-keluar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarangKeluarService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  create(barangKeluar: IBarangKeluar): Observable<IBarangKeluar> {
    const headers = {
      'Content-Type': "application/json"
    }
    return this.http.post<IBarangKeluar>(
      `${this.baseURLTransaction}/barang-keluar`,
      JSON.stringify(barangKeluar),
      {headers}
    )
  }
}
