import { Component } from '@angular/core';
import { Supplier } from 'src/app/interfaces/i-supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent {
  title: string = 'Supplier';
}
