import { IKategoriBarang } from "./i-kategori-barang";
import { Supplier } from "./i-supplier";

export interface IBarang {
  _id?:Number;
  alamat:String;
  nama:String;
 
  // kategoriBarang?:IKategoriBarang;
  // listSupplier?:Array<Supplier>;
  // createdBy:Number;
  // createdDate:Date;
  // modifiedBy:Number;
  // modifiedDate:Date;
  // isActive:Number;
}
export interface Item {
  id: string;
  alamat: string;
  nama: string;
  listBarang: Barang[];
}
interface Barang {
  namaBarang: string;
  deskripsi: string;
  harga: number;
}


