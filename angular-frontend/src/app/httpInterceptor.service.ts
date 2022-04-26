import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (sessionStorage.getItem('authenticatedUser') && sessionStorage.getItem('basicauth')) {
          req = req.clone({
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json',
                            'Authorization': `Basic ${sessionStorage.getItem('basicauth')}`
                        })
            });
         };
    
        return next.handle(req);
    
      }
}