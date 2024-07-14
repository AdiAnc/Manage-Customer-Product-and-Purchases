import { v4 as uuidv4 } from 'uuid';

const initialState = {
  products: [
    { id: 10, name: 'PC', price: '150' , quantity : 10},
    { id: 11, name: 'Watch', price: '80' , quantity : 10 },
    { id: 12, name: 'Book', price: '100' , quantity : 10 },
  ],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        products: [...state.products, action.payload ],
      };
    }

    case 'REMOVE': {
      const products = state.products.filter(
        (prod) => prod.id !== action.payload
      );

      return { ...state, products };
    }
    
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    default:
      return state;
  }
};

export default ProductsReducer;