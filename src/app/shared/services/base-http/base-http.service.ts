import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const DEFAULT_HEADERS = {
  Accept: 'application/json, text/plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
};

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private readonly _web = '/api/web';

  private readonly _baseHref = `http://e-revision.ru${this._web}`;

  private _createDefaultHeaders(): HttpHeaders {
    const headers = new HttpHeaders(DEFAULT_HEADERS);

    return headers;
  }

  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}

  public post<T>(url: string, params?: any): Observable<T> {
    return this._http
      .post<T>(this._baseHref + url, params, {
        headers: this._createDefaultHeaders(),
      })
      .pipe(
        catchError<any, any>((err: HttpErrorResponse) => this._handleError(err))
      );
  }

  private _handleError(e: HttpErrorResponse): Observable<Error> {
    const code = e.status;

    switch (code) {
      case 0:
        this._snackBar.open('Отсутствует соединение с интернетом', 'Закрыть', {
          duration: 3000,
        });
        break;

      default:
        this._snackBar.open(
          e.error?.message ? e.error.message : 'Непредвиденная ошибка',
          'Закрыть',
          { duration: 3000 }
        );
    }

    return throwError(e.error);
  }
}
