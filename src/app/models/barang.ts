import { IBarang } from "../interfaces/i-barang";
import { IKategoriBarang } from "../interfaces/i-kategori-barang";
import { Supplier } from "../interfaces/i-supplier";
import { KategoriBarangModel } from "./kategori-barang-model";
import { SupplierModel } from "./supplier-model";

export class Barang implements IBarang{
  _id?:Number;
  nama:String="";
  alamat:String="";
  // kategoriBarang?:IKategoriBarang=new KategoriBarangModel();
  // listSupplier:Array<Supplier>= [new SupplierModel()];
  // createdBy:Number=0;
  // createdDate:Date=new Date();
  // modifiedBy:Number=0;
  // modifiedDate:Date=new Date();
  // isActive:Number=0;
}
