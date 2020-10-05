import { FETCH_PRODUCT } from '../actions';

const initialState = {
    products:[],
    cardProducts:[]
}
export default function products(state = initialState, action) {
  if (action.type === FETCH_PRODUCT) {
    return {
        ...state,
        products: action.products
    };
  }
  return state;
}