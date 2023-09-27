import { Supplier } from '../interfaces/i-supplier';

export class SupplierModel implements Supplier {
  idSupplier?: number | undefined = 0;
  namaSupplier: string = '';
  alamatSupplier: string = '';
}
