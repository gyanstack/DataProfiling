import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrainService {

  constructor(private _http: HttpClient) { }

  getGrainList(): Observable<any> {
    return this._http.get<any>(environment.grainServiceURL, environment.httpOptions)
      .pipe(
        tap(result => {
          console.log(result);
        }),
        catchError(this.handleError())
      );
  }

  private handleError<T>() {
    return (error: any) => {
      console.log(error);
      return Observable.throw(error);
    };
  }
}
