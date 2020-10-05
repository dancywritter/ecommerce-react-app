export const FETCH_PRODUCT = "FETCH_PRODUCT";

export function fetchProducts(products){
    return {
      type: FETCH_PRODUCT,
      products,
    };
}