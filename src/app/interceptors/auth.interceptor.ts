import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //Con esta clase interceptamos todas las peticiones, para, en el caso de que haya un token, insertarlo en la cabecera. Si no lo
  //hay, la peticion se manda tal cual, sin modificar. TRAS ESTABLECER ESTA CLASE, HAY Q CONFIGURAR EL INTERCEPTOR EN EL APP.MODULE

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //A la hora de modificar la peticion, se hace un clon, se modifica, y es esta la q se envia. Si no se modifica, se pasa 
    //la OG


    let cloneRequest = request;

    if(localStorage.getItem('token')) {

      cloneRequest = request.clone({
        setHeaders: { //le agregamos cabeceras extra a la peticion
          Authorization: "Bearer " + localStorage.getItem('token')!
        }
      });
    }


    return next.handle(cloneRequest);
  }
}
