import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../../store/product.reducer';
import * as fromAction from '../../store/product.actions';
import { selectProducts } from '../../store/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products$: Observable<ProductModel[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromAction.loadProducts());
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.store.pipe(select(selectProducts))
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromAction.deleteProduct({ id }))
  }

}
