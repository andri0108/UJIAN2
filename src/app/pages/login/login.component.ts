import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ILogin } from 'src/app/interfaces/i-login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  resultLogin: any = ""
  user: ILogin = { userName: "wahyu", password: "!Wahyu123" };
  alertMessage: string = "Happy Login!"


  constructor(private loginService: LoginService, private router: Router) {
    // this.productService.setNavbarOff();
  }

  ngOnInit(): void { }


  login(): void {
    this.loginService.login(this.user).pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.resultLogin = respon;
        console.log(this.resultLogin)
        console.log(this.resultLogin.data)
        localStorage.setItem("token", this.resultLogin.data)
        this.router.navigate(['/kategori']);
      })
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
