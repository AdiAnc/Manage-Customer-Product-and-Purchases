import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import {
  getProductNameByCustomerId,
  getPurchasDateByCustomerId,
} from "../utils.jsx/utils";

import { addCustomer, updateCustomer, deleteCustomer } from "../actions/customers";
import styles from './styles';

function Customers() {
  const customers = useSelector((state) => state.customers.customers);
  const products = useSelector((state) => state.products.products);
  const purchases = useSelector((state) => state.purchases.purchases);
  const [displayAddCustComp, setDisplayAddCustComp] = useState(false);
  const [defultCustomer, setDefultCustomer] = useState({});

  const [editedCustomerId, setEditedCustomerId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({ fn: "", ln: "", city: "" });

  const dispatch = useDispatch();

  const displayAddComponent = () => {
    setDisplayAddCustComp(!displayAddCustComp);
  }

  const handleEdit = (customer) => {
    setEditedCustomerId(customer.id);
    setEditedCustomer({ ...customer });
  }

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  }

  const handleInputEdit = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({
      ...editedCustomer,
      [name]: value,
    });
  }

  const handleSaveEditCustomer = () => {
    dispatch(updateCustomer(editedCustomer)); // Dispatch action to update customer
    setEditedCustomerId(null);
    setEditedCustomer({ fn: "", ln: "", city: "" });
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({
      ...editedCustomer,
      [name]: value,
    });
  }

  const handleSaveAddCustomer = () => {
    dispatch(addCustomer(editedCustomer));
    setDefultCustomer({});
    setDisplayAddCustComp(!displayAddCustComp);
  }

  return (
    <div style={styles.container}>
      <h3>Customers Data</h3>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={displayAddComponent}>Add Customer</button>
      </div>

      {displayAddCustComp && (
        <div style={styles.container}>
          <div style={{ fontWeight: "bold", border: "1px solid black" }}>
            <div style={{ fontWeight: "bold" }}>Add Customer</div>
            <div>
              <div>
                <p>
                  First Name:
                  <input
                    type="text"
                    name="fn"
                    onChange={handleInput}
                    value={editedCustomer.fn}
                    placeholder="Enter a name"
                  />
                </p>
              </div>

              <p>
                Last Name:
                <input
                  type="text"
                  name="ln"
                  onChange={handleInput}
                  value={editedCustomer.ln}
                  placeholder="Enter a last name"
                />
              </p>

              <p>
                City:
                <input
                  type="text"
                  name="city"
                  onChange={handleInput}
                  value={editedCustomer.city}
                  placeholder="Enter a city"
                />
              </p>

              <button style={styles.button} onClick={handleSaveAddCustomer}>Save Customer</button>
            </div>
          </div>
        </div>
      )}

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Customer Name</th>
            <th style={styles.th}>Customer ID</th>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Purchase Date</th>
            <th style={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              {editedCustomerId === customer.id ? (
                <>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="fn"
                      onChange={handleInputEdit}
                      value={editedCustomer.fn}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      type="text"
                      name="ln"
                      onChange={handleInputEdit}
                      value={editedCustomer.ln}
                    />
                  </td>
                  <td style={styles.td}>
                    <button style={styles.button} onClick={handleSaveEditCustomer}>Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td style={styles.td}>
                    {customer.fn} {customer.ln}
                  </td>
                  <td style={styles.td}>{customer.id}</td>
                  <td style={styles.td}>
                    {getProductNameByCustomerId(String(customer.id), products, purchases)}
                  </td>
                  <td style={styles.td}>
                    {getPurchasDateByCustomerId(String(customer.id), purchases)}
                  </td>
                  <td style={styles.td}>
                    <button style={styles.button} type="button" onClick={() => handleEdit(customer)}>Edit</button>
                    <button style={styles.button} type="button" onClick={() => handleDelete(customer.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
