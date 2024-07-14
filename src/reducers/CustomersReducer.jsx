import { v4 as uuidv4 } from 'uuid';

const initialState = {
  customers: [
    { id: 203, fn: 'Adi', ln: 'Anc' , city : 'jer'},
    { id: 204, fn: 'Pinhas', ln: 'Anc' , city : 'jer'},
    { id: 205, fn: 'Or', ln: 'Anc' , city : 'jer'},
    { id: 206, fn: 'Hillel', ln: 'Anc' , city : 'jer'},
  ],
};

const CustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        customers: [...state.customers, { id: uuidv4(), ...action.payload }],
      };
    }

    case 'REMOVE': {
      const customers = state.customers.filter(
        (cust) => cust.id !== action.payload
      );

      return { ...state, customers };
    }
    
    case 'UPDATE':
      return {
        ...state,
        customers: state.customers.map((cust) =>
          cust.id === action.payload.id ? action.payload : cust
        ),
      };

    default:
      return state;
  }
};

export default CustomersReducer;