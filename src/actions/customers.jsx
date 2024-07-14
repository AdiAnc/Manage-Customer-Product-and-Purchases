// actions/customers
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const addCustomer = (customer) => ({
  type: ADD ,
  payload: customer,
});

export const deleteCustomer = (customerId) => ({
  type: REMOVE,
  payload: customerId,
});

export const updateCustomer = (customer) => ({
  type: UPDATE,
  payload: customer,
});
