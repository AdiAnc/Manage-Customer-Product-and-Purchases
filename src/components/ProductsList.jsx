import { useSelector } from 'react-redux';
import Product from './Product';
import TotalPrice from './TotalPrice';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { addProduct, deleteProduct } from '../actions/products';
// import ProductListSon from './ProductListSon';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {updateProduct} from "../actions/products"





const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const purchases = useSelector((state) => state.purchases.purchases);
  const customers = useSelector((state) => state.customers.customers);

  const dispatch = useDispatch();
  const [displayAddProdComp, setDisplayAddProdComp] = useState(false);  
  const [defultProduct, setDefultProduct] = useState({ id: null, name: '', price: '', quantity: ''});
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
  const [editedProductId, setEditedProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "", quantity: "" });

  const handleAddProduct = () =>  {

    setDisplayAddProdComp(!displayAddProdComp)
  }

  const handleInput = (e) => {
    console.log("handle input before add product"+defultProduct)
    let { name, value } = e.target;
    setDefultProduct({ 
      ...defultProduct,
       [name]: value 
      })
    console.log('handleInput', defultProduct)
  };
  

  const handleSaveEditProduct = () => {
    dispatch(updateProduct(editedProduct)); // Dispatch action to update customer
    setEditedProductId(null);
    setEditedProduct({ name: "", price: "", quantity: "" });
  }


  const handleSaveAddProduct = () =>  {
    dispatch(addProduct(defultProduct))
    setDefultProduct({ id: '', name: '', price: '', quantity: '' })
    setDisplayAddProdComp(!displayAddProdComp)
    toast.success('The product'+ defultProduct.name+ 'was successfully added!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    }); // Adjust the time as needed
  };
  
  const handleDeleteProduct =  (productId) => {
    console.log('productId', productId);
  
    try {
       dispatch(deleteProduct(productId));
      console.log('The product was deleted successfully!');
      toast.success('The product was deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error if needed
    }
  };
  

  const handleEditProduct =  (productId) => {
    console.log('productId', productId);
  
    try {
       dispatch(updateProduct(productId));
      console.log('The product was deleted successfully!');
      toast.success('The product was deleted successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error if needed
    }
  };

  

  return (
    <div
      style={{
        border: '3px solid blue',
        width: 'auto',
        display: 'inline-block',
        minWidth: '600px',
        padding: '100px',
        textAlign: 'center',
      }}
    >
      <h3>All Products</h3>
      <div>
   <button  onClick={handleAddProduct}>Add Product</button>
      
   </div>

   <div>

      {displaySuccessMessage && <div style={{ color: 'green' }}>The product {defultProduct.name} was successfully added!</div>}
      {/* Your other components and UI elements */}
    </div>
    <ToastContainer />

      {displayAddProdComp && (
          <div style={{ fontWeight: "bold" ,border: "3px solid blue", margin:2, padding: "2px" }}>
         

                <br>
                </br>
                <br>
                </br>

              <div style={{ fontWeight: "bold",border: "2px solid balck" }}>Add Product </div>
              <div >
                <br>
                </br>
                <div> 
              <p>
               
                Name:
                <input
                  type="text"
                  name = "name"
                  onChange={handleInput}
                  placeholder="Enter a name"
                  />
              </p>
              </div>
             
              <p>
                
                Price:
                <input
                  type="text"
                  name = "price"
                  onChange={handleInput}
                  placeholder="Enter a title"
                  />
              </p>
              

              <p>
                
                Quantity:
                <input
                  type="text"
                  name='quantity'
                  onChange={handleInput}
                  placeholder="Enter a title"
                  />
              </p>
              <br>
              </br>
              <button  onClick={handleSaveAddProduct}>Save Product</button>
                  </div>
     
            </div>
          )}

{products.map((product, index) => {
  return (
    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
      {editedProductId === product.id ? (
        <>
          <input type="text" name="name" onChange={handleInput} value={editedCustomer.name} />
          <input type="text" name="price" onChange={handleInput} value={editedCustomer.price} />
          <input type="text" name="quantity" onChange={handleInput} value={editedCustomer.quantity} />
          <button onClick={handleSaveEditCustomer}>Save</button>
        </>
      ) : (
        <>
          {product.name}
          <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
          <button onClick={() => handleEditProduct(product.id)}>Edit Product</button>
          <Product data={product} purchases={purchases} customers={customers} />
          <TotalPrice data={product} />
        </>
      )}
    </div>
  );
})}


     
  </div>
  




)
}


export default ProductsList;
