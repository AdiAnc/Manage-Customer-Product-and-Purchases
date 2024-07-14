
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductNameByProductId,getCustomerNameByCustId,getCustPurchasesByProducttId} from "../utils.jsx/utils";


function Purchase({purchas}) {
  const products = useSelector((state) => state.products.products);
  const customers = useSelector((state) => state.customers.customers);




  const customerName = getCustomerNameByCustId(String(purchas.customerID,customers),customers);
  const productName = getProductNameByProductId(String(purchas.productID),products)
const  purchasDate = String(purchas.Date).substring(0, 11)
return(


  
  <tr>

    <td style={{ border: '1px solid #ddd' }}>{customerName}</td>
    <td style={{ border: '1px solid #ddd' }}>{productName}</td>
    <td style={{ border: '1px solid #ddd' }}>{purchasDate}</td>
    </tr>

  
           
)
}

export default Purchase;
