import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SupplierChoiceComponent } from './components/supplier-choice/supplier-choice.component';
import { BarangKeluarComponent } from './pages/barang-keluar/barang-keluar.component';
import { BarangComponent } from './pages/barang/barang.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { KategoriBarangComponent } from './pages/kategori-barang/kategori-barang.component';
import { ModalComponent } from './components/modal/modal.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    BarangKeluarComponent,
    SupplierChoiceComponent,
    SidebarComponent,
    LoginComponent,
    KategoriBarangComponent,
    BarangComponent,
    SupplierComponent,
    TableComponent,
    ModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
