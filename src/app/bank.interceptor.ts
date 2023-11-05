import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BankInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authHeader =
      'Basic MTE4ODJjZTItYWZlNC00Njg4LWJiZmMtOWZkNDAzNTI4M2FjOkt0ejB5OFFiZVlqeTlQZ2d0TmJVdVh0U093TkIxazRrbFUzNGxoV2l1X2JpTjJxR0dYeWV3ZnozdU1zcmdjWHI=';
    const authReq = request.clone({
      setHeaders: {
        Authorization: authHeader,
      },
    });

    return next.handle(authReq);
  }
}
