import { updateProduct } from './../../store/product.actions';
import { selectedProduct } from './../../store/product.selector';
import { ProductModel } from './../../models/product';
import { ProductState } from './../../store/product.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAction from '../../store/product.actions'
import {  ActivatedRoute } from '@angular/router';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  public model: any = []

  constructor(
    private store: Store<ProductState>,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(fromAction.loadProduct({ id: this.route.snapshot.paramMap.get("id") }))

    this.store.pipe(select(selectedProduct)).subscribe(product => {
      this.model = Object.assign(new ProductModel(), product)  
    })
  }

  onSubmit(){
    const update: Update<ProductModel> = {
      id: this.model.id,
      changes: this.model
    }
    this.store.dispatch(updateProduct({ product: update }))
  }
}
