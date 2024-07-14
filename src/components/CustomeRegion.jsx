import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { addPurchase } from '../actions/purchases';


const CustomeRegion = ({ enrichedCustData , productID, customers }) => {
  const [displayAddPurchComp, setDisplayAddPurchComp] = useState(false);
  const [textInputFn, setTextInputFn] = useState();
  const [defultPurchase, setDefultPurchase] = useState({
    
  });
  

  
  const dispatch = useDispatch();

  

  const handleInput = (e) => {
    console.log("handle input before add product" + defultPurchase);
    let { name, value } = e.target;
  
    // Check if the selected field is 'customerID'
    if (name === 'id') {
      // Update defultPurchase with the selected customerID
      setDefultPurchase({
        ...defultPurchase,
        [name]: value.toString().replace(/'/g, ''),
      });
    } else {
      // Update other fields in defultPurchase
      setDefultPurchase({
        ...defultPurchase,
        [name]:  value,
      });


    }

    
  
    console.log('handleInput', defultPurchase);
  };
  


  const handleSaveAddPurchase = () =>  {
	 
    dispatch(addPurchase(defultPurchase))
    setDefultPurchase({
    id: null,
    customerID: '',
    productID: productID.toString(),
    Date:'',
  })
    setDisplayAddPurchComp(!displayAddPurchComp)
    toast.success('The Purches'+ defultPurchase.id+ 'was successfully added!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    }); // Adjust the time as needed
  };


  
  const handleTextInputFn = () => {
    setTextInputFn(e.target.value);
  };
  
  const displayAddComponent = () => {
    
    setDisplayAddPurchComp(!displayAddPurchComp);
 
  }; 
  
  const addCustomerPurchase = () => {
    
      };


  return (
    <>
   <div
      style={{
        border: '3px solid orange',
        width: 'auto',
        height: 'auto',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        display: 'inline-block',
      }}
    >

      <h4> Customer Bought The Product</h4> 


       {enrichedCustData.map((enrichedCustData ,index) => {
        return (
          
        <div style={{border: '3px solid black',padding: '10px',margin: '10px' }} key={index}>
           <p>Customer Name : {enrichedCustData.Name} </p>
           <p>Customer Date of Purchased : {enrichedCustData.Date} </p>
    </div>)
      })}

<button onClick={displayAddComponent}>Add Customer Purchase</button>
    </div>
    {displayAddPurchComp && (
          <div style={{ fontWeight: "bold" ,border: "1px solid balck" }}>
              <div style={{ fontWeight: "bold" }}>Add Purchase </div>
              <div>
                
                <div> 
              <p>
               
              Purchase ID:
                <input
                  type="number"
                  name = "id"
                  onChange={handleInput}
                  value={defultPurchase.id} 
                  placeholder="Enter a name"
                  />
              </p>
              </div>
             
              <p>
                
                Customer :
              
              </p>

              <select
      name="customerID"
      onChange={handleInput}
      value={defultPurchase.customerID} 
    >
      <option value="" disabled selected>Select a customer</option>
      {customers.map(customer => (
        <option key={customer.id} value={customer.id}>
          {customer.fn} {/* Replace with the actual property you want to display */}
        </option>
      ))}
    </select>

              <p>
                
                Date:
                <input
                  type="text"
                  name = "Date"
                  onChange={handleInput}
                  value={defultPurchase.Date} 
                  placeholder="Enter a title"
                  />
              </p>
               
              <p>
                
              productID:
                <input
                  type="text"
                  name = "productID"
                  onChange={handleInput}
                  value={defultPurchase.productID} 
                  placeholder="Enter a title"
                  />
              </p>

             

              <button  onClick={handleSaveAddPurchase}>Save Purchase</button>
                  </div>
     
            </div>
          )}

    </>


  );
};

export default CustomeRegion;