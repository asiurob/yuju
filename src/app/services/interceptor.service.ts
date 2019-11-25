import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private ROUTER: Router,
    public LOADER: LoaderService
  ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any> > {
    this.LOADER.show();
    const token   = '599d4be34f2cf59df13ebb27e9852570bc0684d2';
    let request = req;

    request = req.clone({
      setHeaders: { authorization: `Token ${ token }` }
    });

    const response = next.handle( request ).pipe(
      finalize( () => this.LOADER.hide() ),
      catchError( ( err: HttpErrorResponse ) => {

        if (err.status === 401) {
          this.ROUTER.navigateByUrl('/');
        }
        return throwError( err );

      }),
    );
    return response;

  }
}
