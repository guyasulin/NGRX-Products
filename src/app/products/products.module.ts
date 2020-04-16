import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './component/product/product.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductRoutingModule } from './product-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
// import * as fromProductState from './store/product.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import * as fromProduct from './store/product.reducer'

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AngularMaterialModule,
    FormsModule,
    StoreModule.forFeature(
      fromProduct.productFeatureKey,
      fromProduct.reducer,
    ),

    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
  ]
})
export class ProductsModule {}
