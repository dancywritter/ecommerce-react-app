import { FETCH_PRODUCT, ASS_ORDER, DES_ORDER } from "../actions";

const initialState = {
    products:[],
    cardProducts:[]
}
export default function products(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCT:
        return {
          ...state,
          products: action.products,
        };
      case ASS_ORDER:
        return {
          ...state,
          products: action.products,
        };
      case DES_ORDER:
        return {
          ...state,
          products: action.products,
        };
      default:
        return state;
    }
}