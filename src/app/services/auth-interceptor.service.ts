import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {  

  intercept(req, next) {
    const tokenUser  = localStorage.getItem('tokenUser');

    if (tokenUser) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: "Bearer " + tokenUser
        }
      })
      return next.handle(cloned)
    }
    else {
      return next.handle(req)
    }
  
  } 
}

