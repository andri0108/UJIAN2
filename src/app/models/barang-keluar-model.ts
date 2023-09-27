import { IBarangKeluar, IItem } from "../interfaces/i-barang-keluar";

export class BarangKeluarModel implements IBarangKeluar {
  nomorBarangKeluar: string = "";
  userId: number = 0;
  tanggal: Date = new Date();
  supplierId: number = 0;
  grandTotal: number = 0;
  items: IItem[] = [];
}
