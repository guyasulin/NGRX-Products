import { addProduct } from './../../store/product.actions';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductState } from '../../store/product.reducer';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
      this.store.dispatch(addProduct({ product: f.value }))
  }
}
