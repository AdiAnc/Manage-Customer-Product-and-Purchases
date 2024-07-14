// actions/customers
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const addPurchase = (purchase) => ({
  type: ADD ,
  payload: purchase,
});

export const deletePurchase = (purchaseId) => ({
  type: REMOVE,
  payload: purchaseId,
});

export const updatePpurchase = (purchase) => ({
  type: UPDATE,
  payload: purchase,
});
