export interface IItem {
  name: string;
  price: number;
  qty: number;
  total: number;
}

export interface IBarangKeluar {
  nomorBarangKeluar: string;
  userId: number;
  tanggal: Date;
  supplierId: number;
  grandTotal: number;
  items: IItem[]; 
}
