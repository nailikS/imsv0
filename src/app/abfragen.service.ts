import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { IVersion } from './iversion';

@Injectable({
  providedIn: 'root',
})
export class AbfragenService {
  private versionURL= "http://imstest-centos/api/version"
  private mockURL= "../mockingbird.json"
  

  constructor(private http: HttpClient) { }
  getMockVersion(): Observable<IVersion[]>{
    return this.http.get<IVersion[]>(this.mockURL);
  }
  getVersion(): Observable<IVersion[]>{
    return this.http.get<IVersion[]>(this.versionURL).pipe(
     // retry(3),
      catchError(this.handleError<IVersion[]>('getVersion()')))}

   private handleError<T> (operation = 'operation', result?: T) {
 
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}