import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, productFeatureKey, selectAll } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>(
    productFeatureKey
)

export const selectProducts = createSelector(selectProductState, selectAll);
export const selectedProduct = createSelector(
    selectProductState,
     (state: ProductState) => state.selectedProduct
     );