import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { tap, mergeMap, catchError, map, concatMap } from 'rxjs/operators';
import * as fromProductActions from './product.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) =>
            fromProductActions.loadProductsSuccess({ products })
          ),
          catchError((err) => of(fromProductActions.loadProductsFailure(err)))
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.loadProduct),
      mergeMap((action) =>
        this.productService.getProduct(action.id).pipe(
          map((product) =>
            fromProductActions.loadProductSuccess({ selectedProduct: product })
          ),
          catchError((err) => of(fromProductActions.loadProductsFailure(err)))
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap((action) =>
        this.productService.createProduct(action.product).pipe(
          map((product) => fromProductActions.addProductSuccess({ product })),
          catchError((err) => of(fromProductActions.addProductFailure(err)))
        )
      ),
      tap(() => this.router.navigate(['/product/list']))
    )
  );

  updateProduct$ = createEffect(() => 
      this.actions$.pipe(
        ofType(fromProductActions.updateProduct),
        concatMap((action) =>
          this.productService.updateProduct(
            action.product.id,
            action.product.changes
          )
        ),
        tap(() => this.router.navigate(['/product/list']))
      ),
    { dispatch: false }
  );

  deleteProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromProductActions.deleteProduct),
    mergeMap((action) =>
      this.productService.deleteProduct(action.id).pipe(
        map(() => fromProductActions.deleteProductSuccess({ id: action.id })),
        catchError((err) => of(fromProductActions.deleteProductFailure(err)))
      )
    ),
    tap(() => this.router.navigate(['/product/list']))
  )
);
}
