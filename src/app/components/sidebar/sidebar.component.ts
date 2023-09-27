import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  fixedRoutes: string[];
  includeRoutes: string[];

  constructor(private router: Router) {
    this.fixedRoutes = [''];
    this.includeRoutes = [
      '/barang',
      '/transaksi',
      '/keranjang',
      '/kategori',
      '/supplier',
    ];
  }

  shouldShowNavbar(): boolean {
    const currentRoute = this.router.url;
    return (
      this.includeRoutes.some((r) => currentRoute.includes(r)) ||
      this.fixedRoutes.some((r) => currentRoute == r)
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate([""]);
  }
}
