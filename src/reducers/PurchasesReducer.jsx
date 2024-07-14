import { v4 as uuidv4 } from 'uuid';

const initialState = {
  purchases: [
    { id: 100, customerID: '203', productID: '10' , Date : 'Aug 29 2023 12:01:25'},
    { id: 101, customerID: '204', productID: '11' , Date : 'Aug 29 2023 12:01:25'},
    { id: 102, customerID: '203', productID: '11' , Date : 'Aug 31 2023 12:01:25'},
    { id: 103, customerID: '205', productID: '11' , Date : 'Aug 31 2023 12:01:25'},
    { id: 104, customerID: '204', productID: '11' , Date : 'Sep 09 2023 12:01:25'},
    { id: 105, customerID: '204', productID: '10' , Date : 'Sep 09 2023 12:01:25'},
    { id: 106, customerID: '203', productID: '10' , Date : 'Aug 29 2023 12:01:25'},
    { id: 107, customerID: '204', productID: '11' , Date : 'Aug 29 2023 12:01:25'},
    { id: 108, customerID: '203', productID: '12' , Date : 'Jun 29 2023 12:01:25'}

  ],
};

const PurchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        purchases: [...state.purchases, action.payload ],
      };
    }

    case 'REMOVE': {
      const purchases = state.purchases.filter(
        (purch) => purch.id !== action.payload
      );

      return { ...state, purchases };
    }
    
    case 'UPDATE':
      return {
        ...state,
        purchases: state.purchases.map((purch) =>
        purch.id === action.payload.id ? action.payload : purch
        ),
      };

    default:
      return state;
  }
};

export default PurchasesReducer;