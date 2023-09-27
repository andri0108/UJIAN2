import { Component, OnInit } from '@angular/core';
import { IBarangKeluar } from 'src/app/interfaces/i-barang-keluar';
import { BarangKeluarModel } from 'src/app/models/barang-keluar-model';
import { BarangKeluarService } from 'src/app/services/barang-keluar.service';

@Component({
  selector: 'app-barang-keluar',
  templateUrl: './barang-keluar.component.html',
  styleUrls: ['./barang-keluar.component.css']
})
export class BarangKeluarComponent implements OnInit {
  barangKeluar: IBarangKeluar;

  constructor(private barangKeluarService: BarangKeluarService) {
    this.barangKeluar = new BarangKeluarModel();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onCreate(): void {
    this.barangKeluarService.create(this.barangKeluar).subscribe((resp: IBarangKeluar) => {
      this.barangKeluar = resp;
    });
  }

  onGetSupplier(supplierId: string): void {
    console.log(supplierId)
  }

  

}
