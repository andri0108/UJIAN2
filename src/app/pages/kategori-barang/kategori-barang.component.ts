import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, throwError } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { IKategoriBarang } from 'src/app/interfaces/i-kategori-barang';
import { KategoriBarangService } from 'src/app/services/kategori-barang.service';

@Component({
  selector: 'app-kategori-barang',
  templateUrl: './kategori-barang.component.html',
  styleUrls: ['./kategori-barang.component.css'],
})
export class KategoriBarangComponent implements OnInit {

  changeForm: boolean = false;
  addForm: boolean = false;
  iKategoriBarang: IKategoriBarang;
  kategoris: IKategoriBarang[] = [];
  isLoading: boolean;

  keyword = ""

  tambahButtons: any[] = [
    {
      label: "Simpan",
      onButtonClick: () => this.onCreate(this.kategoriBarangService),
      class: "bg-dark rounded-0 border-0 p-3"
    }
  ]

  editButtons: any[] = [
    {
      label: "Simpan",
      onButtonClick: () => this.onCreate(this.kategoriBarangService),
      class: "bg-dark rounded-0 border-0 p-3"
    }
  ]

  constructor(private modalService: NgbModal, private http: HttpClient, private kategoriBarangService: KategoriBarangService) {
    this.iKategoriBarang = {
      idKategoriBarang: 0,
      namaKategoriBarang: "",
    };

    this.isLoading = true;
  }



  newKategori: IKategoriBarang = {
    idKategoriBarang: 0,
    namaKategoriBarang: '',
  };

  upKategori: IKategoriBarang = {
    idKategoriBarang: 0,
    namaKategoriBarang: '',
  };

  ngOnInit(): void {
    this.getKategoriBarang()
    this.search(this.keyword)
  }

  getKategoriBarang() {
    this.kategoriBarangService.all().pipe(catchError(this.handleError)).subscribe((resp: any) => {
      this.isLoading = false;
      this.kategoris = resp.data;
    });
  }


  onCreate(kategoriBarangService: KategoriBarangService) {
    kategoriBarangService?.create(this.iKategoriBarang).pipe(catchError(this.handleError)).subscribe(() => {
      this.getKategoriBarang();
      this.iKategoriBarang = {
        idKategoriBarang: 0,
        namaKategoriBarang: "",
      };
    })
  }

  // onCreate() {
  //   this.kategoriBarangService.create(this.iKategoriBarang).pipe(catchError(this.handleError)).subscribe((resp: IKategoriBarang) => {
  //     this.iKategoriBarang = resp;
  //     window.location.reload();
  //   });
  // }

  loadKategori() {
    this.kategoriBarangService.all().subscribe((data) => {
      this.kategoris = data;
    });
  }

  onUpdate() {
    this.kategoriBarangService.create(this.upKategori).subscribe(() => {
      this.loadKategori();
      this.upKategori = {
        idKategoriBarang: 0,
        namaKategoriBarang: '',
      }
    });
  }


  onDelete(kategoris: IKategoriBarang): void {
    if (kategoris && kategoris.idKategoriBarang) {
      this.kategoriBarangService.delete(kategoris.idKategoriBarang).subscribe(() => {
        this.getKategoriBarang()
        window.location.reload();
      })
    }
  }

  search(keyword: string) {
    if (keyword) {
      // Mencari data yang cocok dengan kata kunci
      this.kategoris = this.kategoris.filter(item =>
        item.namaKategoriBarang.toLowerCase().includes(keyword.toLowerCase())
      );
      console.log(this.kategoris)
    } else {
      // Jika tidak ada kata kunci, tampilkan semua data
      this.getKategoriBarang()
    }
  }



  // MODAL
  closeResult = '';
  openAdd(add: any) {
    this.modalService.open(add, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  openUpdate(content: any, kategori: IKategoriBarang) {
    this.upKategori = kategori;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("coba");
      },
      (reason: any) => {

      }
    )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

}
