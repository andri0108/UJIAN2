import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarangKeluarComponent } from './pages/barang-keluar/barang-keluar.component';
import { KategoriBarangComponent } from './pages/kategori-barang/kategori-barang.component';
import { BarangComponent } from './pages/barang/barang.component';
import { LoginComponent } from './pages/login/login.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { authGuard } from './services/auth.service';

const routes: Routes = [
  {
    path: 'transaksi',
    component: BarangKeluarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'barang',
    component: BarangComponent,

  },
  {
    path: 'kategori',
    component: KategoriBarangComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    component: LoginComponent,
  },


  { path: 'supplier', component: SupplierComponent, canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
