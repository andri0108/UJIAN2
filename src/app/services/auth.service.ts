import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return localStorage.getItem("token") ? true:false;
  }
}


export const authGuard = (): void | boolean => {
  const userService:AuthService = inject(AuthService);
  const router: Router = inject(Router);


  if (userService.isLoggedIn()) {
    return true;
  }

  router.navigate(['/']);
}