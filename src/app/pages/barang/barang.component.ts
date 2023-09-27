import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { last } from 'rxjs';
import { IBarang } from 'src/app/interfaces/i-barang';
import { IKategoriBarang } from 'src/app/interfaces/i-kategori-barang';
import { Supplier } from 'src/app/interfaces/i-supplier';
import { Barang } from 'src/app/models/barang';
import { KategoriBarangModel } from 'src/app/models/kategori-barang-model';
import { SupplierModel } from 'src/app/models/supplier-model';
import { BarangService } from 'src/app/services/barang.service';
import { KategoriBarangService } from 'src/app/services/kategori-barang.service';
import { SupplierService } from 'src/app/services/supplier.service';
@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {
  
  closeResult = '';
  barangData: Barang[] = [];
	selectedBarang: Barang | null = null;

 
  
  barang:any[];
  
  obj:any;
  hasil:any;
  
  listSupplier:Supplier[];
  _id?:Number=0;
  nama:String='';
  alamat:String='';
  supplier?:Number=0;
  katBarang?:Number=0;
  listKategoriBarang?:IKategoriBarang[];
  upBarang:any;

  constructor(
    private barangService:BarangService,
    private modalService: NgbModal,
    private supplierService:SupplierService,
    private kategoriBarang:KategoriBarangService
  ){
    // this.barang = [new Barang()];
    this.barang=[new Barang ()]
    console.log(this.barang);
    this.upBarang=[new Barang()]
    this.obj={
      '_id': this._id,
      'alamat':this.alamat,
      'kategoriBarang': {
        'idKategoriBarang':this.katBarang
      },
      'listSupplier':[
        {
          'idSupplier':this.supplier
        }
      ]
    }
    this.listSupplier=[new SupplierModel()]
    this.hasil=[]
  }
  ngOnInit(){
    this.loadBarang()
    // this.supplierService.getSuppliers().subscribe((
    //   resp: any) => {
    //   this.listSupplier = resp;

    // });
    // this.kategoriBarang.all().subscribe((
    //   resp: any) => {
    //   this.listKategoriBarang = resp.data;
    // });
    
  }
  loadBarang(){
    this.barangService.all().subscribe((resp: any) => {
      this.barang= resp;
      console.log(resp);
      });
      
      
  }

  post(){
    this.obj={
      '_id': this.nama,
      'alamat':this.alamat,
      'kategoriBarang': {
        'idKategoriBarang':this.kategoriBarang
      }
    }
  // this.barangService.post(this.obj).subscribe((
  //   resp: any) => {
  //   this.hasil= resp;
  //   this.namabarang=''
  //   this.deskripsi=''
  //   this.listKategoriBarang=[new KategoriBarangModel()];
  //   this.supplier=0
  //   console.log(this.hasil);
  // });
  }
  openEdit(content:any,barang:any) {
    this.upBarang ={...barang}
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title_update' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
        
        
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		)
	}
  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  

	public getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
  }
  
  
	// deleteBarang(barang: Barang): void {
	// 	console.log(barang.idBarang);
		
	// 	if (barang && barang.idBarang) {
	// 	  this.barangService
	// 		.deleteBarang(barang.idBarang)
	// 		.subscribe(() => {
	// 		  this.loadBarang();
	// 		  this.selectedBarang = null;
	// 	    });
	//     }
	//   }
  updateBarang(): void {
    console.log(this.upBarang);
    let objj:any={
        '_id' : this.upBarang._id,
        'alamat': this.upBarang.alamat,
        'nama':this.upBarang.nama,
        'kategoriBarang': {
          'idKategoriBarang':this.upBarang.kategoriBarang
        },
        'listSupplier':[{
          idSupplier:this.upBarang.idSupplier
        }],
        'modifiedBy':this.upBarang.idBarang ,
        modifiedDate:new Date()
      }
      console.log(this.upBarang.listSupplier);
      

    // console.log(objj);
    // this.barangService.updateBarang(objj).subscribe(() => {
    //   this.loadBarang();
    //   this.upBarang = {
    //     idBarang: 0,
    //     deskripsi: '',
    //   };
    // });
  }
}
