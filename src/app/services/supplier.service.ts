import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/i-supplier';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private apiUrl = environment.baseURL + '/supplier'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' + localStorage.getItem('token'), // Ganti yourAccessToken dengan token yang Anda miliki
  });

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.http
      .get<any>(`${this.apiUrl}/v1/findall`, { headers: this.headers })
      .pipe(map((response) => response.data));
  }

  // Fungsi untuk menambah supplier baru
  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiUrl}/v1/sv`, supplier, {
      headers: this.headers,
    });
  }

  // Fungsi untuk mengambil detail supplier berdasarkan ID
  getSupplierById(id: number): Observable<Supplier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Supplier>(url);
  }

  // Fungsi untuk mengupdate supplier
  updateSupplier(supplier: Supplier): Observable<Supplier> {
    const url = `${this.apiUrl}/v1/upd/${supplier.idSupplier}`;
    return this.http.put<Supplier>(url, supplier);
  }

  // Fungsi untuk menghapus supplier berdasarkan ID
  deleteSupplier(id: number): Observable<void> {
    const url = `${this.apiUrl}/v1/del/${id}`;
    return this.http.delete<void>(url, {
      headers: this.headers,
    });
  }
}
