export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const ASS_ORDER = "ASS_ORDER";
export const DES_ORDER = "DES_ORDER";

export function fetchProducts(products){
    return {
      type: FETCH_PRODUCT,
      products,
    };
}

export function assOrder(products) {
  return {
    type: ASS_ORDER,
    products,
  };
}

export function disOrder(products) {
  return {
    type: DES_ORDER,
    products,
  };
}