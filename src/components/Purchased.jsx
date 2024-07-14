import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Purchase from "./Purchase";
import { useDispatch } from 'react-redux';
import { addPurchase, deletePurchase, updatePpurchase } from "../actions/purchases";
import styles from './styles'; // Import the shared styles

function Purchased() {

  const products = useSelector((state) => state.products.products);
  const customers = useSelector((state) => state.customers.customers);
  const purchases = useSelector((state) => state.purchases.purchases);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [displayFilter, setDisplayFilter] = useState(true);
  const [filteredPurchases, setFilteredPurchases] = useState(purchases);  // New state to hold filtered purchases
  const [searchResult, setSearchResult] = useState([]);
  const [displayAddPurchComp, setDisplayAddPurchComp] = useState(false);
  const [editedPurchase, setEditedPurchase] = useState({ customerID: "", productID: "", Date: "" });

  const dispatch = useDispatch();

  const displayAddPurchase = () => {
    setDisplayAddPurchComp(!displayAddPurchComp);
  }

  const handleInput = (e) => {
    let { name, value } = e.target;
    setEditedPurchase({
      ...editedPurchase,
      [name]: value,
    });
  }

  const handleSaveAddPurchase = () => {
    dispatch(addPurchase(editedPurchase));
    setDisplayAddPurchComp(!displayAddPurchComp);
  }

  const handleSearch = () => {
    const searchPurchase = purchases.filter((item) => {
      if (
        (selectedProduct && item.productID.toLowerCase().includes(selectedProduct.toLowerCase())) ||
        (selectedCustomer && item.customerID.toLowerCase().includes(selectedCustomer.toLowerCase()))
      ) {
        return true;
      }
      if (!selectedProduct && !selectedCustomer) {
        return true;
      }
      return false;
    });
    setSearchResult(searchPurchase);
  };

  const handlesetDisplayFilter = () => {
    setDisplayFilter(!displayFilter);
  }

  return (
    <div style={styles.container}>
      <h2>Purchased Component</h2>
      <label>Select a Product:</label>
      <select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">Select a Product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>

      <br />

      <label>Select a Customer:</label>
      <select
        value={selectedCustomer}
        onChange={(e) => setSelectedCustomer(e.target.value)}
      >
        <option value="">Select a Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.fn}
          </option>
        ))}
      </select>

      <div>
        <br></br>
        <div>
          <button style={styles.button} onClick={handleSearch}>Search</button>
        </div>

        
        <br></br>
        <button style={styles.button} onClick={displayAddPurchase}>Add Purchase</button>
        {displayAddPurchComp && (
          <div style={{ fontWeight: "bold", border: "1px solid black", margin: "10px", padding: "10px" }}>
            <div style={{ fontWeight: "bold" }}>Add Purchase</div>
            <div>
              <div>
                <p>Customer ID:
                  <input
                    type="text"
                    name="customerID"
                    onChange={handleInput}
                    value={editedPurchase.customerID}
                    placeholder="Enter a customerID"
                  />
                </p>
              </div>
              <p>Product ID :
                <input
                  type="text"
                  name="productID"
                  onChange={handleInput}
                  value={editedPurchase.productID}
                  placeholder="Enter a productID"
                />
              </p>
              <p>Date :
                <input
                  type="text"
                  name="Date"
                  onChange={handleInput}
                  value={editedPurchase.Date}
                  placeholder="Enter a Date"
                />
              </p>
              <button style={styles.button} onClick={handleSaveAddPurchase}>Save Purchase</button>
            </div>
          </div>
        )}

        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Customer Name</th>
                <th style={styles.th}>Purchased products</th>
                <th style={styles.th}>Purchased dates</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.length === 0 ?
                purchases.map((purchase, index) => (
                  <Purchase key={index} purchas={purchase} />
                )) :
                searchResult.map((purchase, index) => (
                  <Purchase key={index} purchas={purchase} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Purchased;
