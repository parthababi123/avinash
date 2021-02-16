import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { environment } from '../../environments/environment';

import { AccountService } from '../services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        //const user = this.accountService.userValue;
        //console.log("hhhhhhhh"+user.token);
        const user=JSON.parse(localStorage.getItem('user'));
        //console.log("xxxxxxxx"+user.token);
        const isLoggedIn = user && user.token;
        const g = "http://localhost:3000";
        if (isLoggedIn && g) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        console.log(JSON.stringify(request.headers));
        return next.handle(request);
    }
}