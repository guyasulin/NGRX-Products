import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = "api/products/"
  // productsUrl:string = "http://localhost:3000/products/"

  constructor(private  http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl).pipe(
      map(res => res),
      tap(res => console.log(res)),
      catchError(this.handleError)
    )
  }

  getProduct(productId: string): Observable<ProductModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.get<ProductModel>(this.productsUrl + productId, {headers}).pipe(
      tap(data => console.log(JSON.stringify( productId))),
      catchError(this.handleError)
    )
  }

  createProduct(model: ProductModel): Observable<ProductModel>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<ProductModel>(this.productsUrl, model, {headers}).pipe(
      catchError(this.handleError)
    )
  }

  updateProduct(productId: number | string, change: Partial<ProductModel>): Observable<ProductModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.put<ProductModel>(this.productsUrl + productId, change, {headers}).pipe(
      catchError(this.handleError)
    )
  }

  deleteProduct(productId: string): Observable<ProductModel> {
    return this.http.delete<ProductModel>(this.productsUrl + productId).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
