import { Component } from '@angular/core';
import { Supplier } from 'src/app/interfaces/i-supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  suppliers: Supplier[] = [];
  addForm: boolean = false;
  changeForm: boolean = false;
  selectedSupplier: Supplier | null = null;

  newSupplier: Supplier = {
    idSupplier: 0,
    namaSupplier: '',
    alamatSupplier: '',
  };

  upSupplier: Supplier = {
    idSupplier: 0,
    namaSupplier: '',
    alamatSupplier: '',
  };

  constructor(private supplierService: SupplierService, private modalService: NgbModal) {}

  openAdd(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("opening")
      }, 
      (reason: any) => {

      }
    )
  }

  openUpdate(content: any, supplier: Supplier) {
    this.upSupplier = {...supplier};
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("opening")
      }, 
      (reason: any) => {

      }
    )
  }


  ngOnInit(): void {
    this.loadSuppliers();
  }

  onAdd() {
    this.addForm = !this.addForm;
  }

  onChange(supplier: Supplier) {
    this.changeForm = !this.changeForm;
    this.upSupplier = supplier;
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
    });
  }

  createSupplier(): void {
    this.supplierService.addSupplier(this.newSupplier).subscribe(() => {
      this.loadSuppliers();
      this.newSupplier = {
        idSupplier: 0,
        namaSupplier: '',
        alamatSupplier: '',
      };
    });
  }

  updateSupplier(): void {
    this.supplierService.addSupplier(this.upSupplier).subscribe(() => {
      this.loadSuppliers();
      this.upSupplier = {
        idSupplier: 0,
        namaSupplier: '',
        alamatSupplier: '',
      };
    });
  }

  deleteSupplier(suppliers: Supplier): void {
    if (suppliers && suppliers.idSupplier) {
      this.supplierService
        .deleteSupplier(suppliers.idSupplier)
        .subscribe(() => {
          this.loadSuppliers();
          this.selectedSupplier = null;
        });
    }
  }
}
