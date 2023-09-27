import { Injectable } from '@angular/core';
import { ILogin } from '../interfaces/i-login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {
    }

    public login(user: ILogin): Observable<any> {
        const headers = {
            "Content-Type": "application/json"
        }
        console.log(user)
        return this.http.post<any>(
            `${environment.baseURL}/op/v1/gt`,
            JSON.stringify(user),
            { headers }
        )
    }
}
