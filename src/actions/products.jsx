// actions/products.js
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const addProduct = (product) => ({
  type: ADD ,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: REMOVE,
  payload: productId,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
