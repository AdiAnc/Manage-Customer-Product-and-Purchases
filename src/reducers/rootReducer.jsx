// store.js
import { combineReducers } from 'redux';
import CustomersReducer from './CustomersReducer';
import ProductsReducer from './ProductsReducer';
import PurchasesReducer from './PurchasesReducer';
import { legacy_createStore as createStore } from 'redux';



const rootReducer = combineReducers({
    customers: CustomersReducer,
    products: ProductsReducer,
    purchases: PurchasesReducer
});


export default rootReducer;
