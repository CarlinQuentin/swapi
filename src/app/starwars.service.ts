import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class StarwarsService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  
  
  getData(names, items){
    // console.log(`https://swapi.co/api/${names}/?search=${items}`)
    return this.http.get( `https://swapi.co/api/${names}/?search=${items}`)
    .pipe(
      tap(data => console.log(`data fetched: ${data}`)),
      // catchError(this.handleError('getInfo', []))
    )
  }

  // handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error)
  //     return of(result as T)
  //   }
  // }

}
