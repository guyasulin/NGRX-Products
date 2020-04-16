import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductState } from '../../store/product.reducer';
import { Store, select } from '@ngrx/store';
import * as fromAction from '../../store/product.actions';
import { selectedProduct } from '../../store/product.selector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 
 public product$: Observable<ProductModel>;

    
  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
    ) { }


  ngOnInit(): void {
    this.store.dispatch(fromAction.loadProduct({ id: this.route.snapshot.paramMap.get("id") }))

    this.product$ = this.store.pipe(select(selectedProduct))
  }

  deleteProduct(id: string) {
    this.store.dispatch(fromAction.deleteProduct({ id }))
  }
}
