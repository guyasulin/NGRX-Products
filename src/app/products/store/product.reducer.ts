import {createReducer, on,Action,} from '@ngrx/store';
import { ProductModel } from '../models/product';
import * as ProductActions from "./product.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const productFeatureKey = 'products';

export interface ProductState extends EntityState<ProductModel>{
  error: any;
  selectedProduct: ProductModel;
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export const initialState: ProductState = adapter.getInitialState({
  error: undefined,
  selectedProduct: undefined
})

export const productReducers = createReducer(
  initialState,
  on(ProductActions.addProductSuccess, (state, action) => {
    return adapter.addOne(action.product, state)
  }),
  on(ProductActions.addProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  on(ProductActions.loadProductsSuccess, (state, action) => {
    return adapter.addAll(action.products, state)
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
/// Load Product
  on(ProductActions.loadProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.selectedProduct
    }
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  /// Update Product
  on(ProductActions.updateProduct, (state, action) =>
    adapter.updateOne(action.product, state)
  ),

    /// Delete Product
    on(ProductActions.deleteProductSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

  on(ProductActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);

  export function reducer(state: ProductState | undefined, action: Action) {
    return productReducers(state, action)
  }

  export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
  } = adapter.getSelectors()