import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../models/product';
import { Update } from '@ngrx/entity';

// Load List Products
export const loadProducts = createAction(
  '[Product List Component] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Products List Effect] Load Products Success',
  props<{ products: ProductModel[] }>()
);

export const loadProductsFailure = createAction(
  '[Products List Effect] Load Products Failure',
  props<{ error: any }>()
);


// Load Product
export const loadProduct = createAction(
  '[Product List Component] Load Product',

  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product List Effect] Load Product Success',
  props<{ selectedProduct: ProductModel }>()
);

export const loadProductFailure = createAction(
  '[Product List Effect] Load Product Failure',
  props<{ error: any }>()
);

// Add Product
export const addProduct = createAction(
  '[Product Add Component] Add Product',

  props<{ product: ProductModel }>()
);

export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',

  props<{ product: ProductModel }>()
);

export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);

// Edit Product
export const updateProduct = createAction(
  "[Product Edit Component] Update Product",
  props<{ product: Update<ProductModel> }>()
);

// Delete Product
export const deleteProduct = createAction(
  "[Product Components] Delete Product",
  props<{ id: string }>()
);

export const deleteProductSuccess = createAction(
  "[Product Delete Effect] Delete Product Success",
  props<{ id: string }>()
);

export const deleteProductFailure = createAction(
  "[Product Delete Effect] Delete Product Failure",
  props<{ error: any }>()
);
