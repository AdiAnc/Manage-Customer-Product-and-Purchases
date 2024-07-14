import { useSelector } from "react-redux";

export const getCustPurchasesByCustId = (customerId,purchases) => {
  {
    console.log("purchases:", purchases);

    console.log("customerId: " + customerId);

    const customerPurchases = purchases.filter(
      (purchase) => purchase.customerID === customerId
    );
    return customerPurchases;
  }
};

export const enrichCustomerDataCustName = (customerData,customers)=> {

 // Create a mapping of customer ID to customer name
 const customerNameMap = new Map(customers.map(customer => [customer.id, customer]));

 // Create a new array by combining data from both arrays
 const combinedArray = customerData.map(data => {
   const customerName = customerNameMap.get(parseInt(data.customerID));

   if (customerName) {
     return {
       customerID: data.customerID,
       Name: `${customerName.fn} ${customerName.ln}`,
       Date: data.Date,
     };
   }

   return null; // Handle the case where the customer name is not found
 }).filter(Boolean); // Remove any null entries

 return combinedArray;
};


export const getProductIdByCustomerId = (customerId,purchases) => {
  {
    const customerPurchases = getCustPurchasesByCustId(customerId,purchases);
    const productIDs = customerPurchases.map((purchase) => purchase.productID);
    return productIDs;
  }
};


export const getPurchasDateByCustomerId = (customerId,purchases) => {
  {
    const customerPurchases = getCustPurchasesByCustId(customerId,purchases);
    const purchasesDates = customerPurchases.map((purchase) => purchase.Date);
    return purchasesDates.join(", ");
  }
};

export const getProductNameByProductId = (productId,products) => {
  {

    for (const product of products) {
      if (product.id === parseInt(productId)) {
        // If a match is found, return the productName
        return product.name;
      }
    }
  }
};

export const getCustomerNameByCustId = (custId,customers) => {
  {

    for (const customer of customers) {
      if (customer.id === parseInt(custId)) {
        // If a match is found, return the productName
        return customer.fn;
      }
    }
  }
};


export const getProductNameByCustomerId = (customerId,products,purchases) => {
  {
    const productIDs = getProductIdByCustomerId(customerId,purchases);
    const productNames = productIDs.map((productId) =>
      getProductNameByProductId(productId,products)
    );
    return productNames.join(", ");
  }
};

;

export const getCustPurchasesByProducttId = (productId,purchases) => {
  {
    console.log("purchases:", purchases);

    console.log("productId: " + productId);

    const productPurchases = purchases.filter(
      (purchase) => purchase.productID === productId
    );
    console.log("productPurchases" + productPurchases);
    return productPurchases;
  }
};

export const getCustomerIdByProductPurchases = (productPurchases) => {
  const customerIDs = productPurchases.map((purchase) => purchase.customerID);
  console.log("customerIDs: " + customerIDs);
  return customerIDs;
};

export const getCustomerDataIdByProductPurchases = (productPurchases) => {
  const customerData = productPurchases.map((purchase) => ({
    customerID: purchase.customerID,
    Date: purchase.Date,
  }));

  console.log("customerData: ", customerData);

  return customerData;
};




export const getCustDataProductComp = async(product,purchases,customers) => {
  console.log("I an in getCustDataProductComp purchases"+purchases)
  const productData = {};
  productData.id = product.id;
  productData.name = product.name;
  productData.Price = product.price;
  productData.quantity = product.quantity;
  
  const productPurchases = getCustPurchasesByProducttId(String(product.id),purchases);
  console.log("I an in getCustDataProductComp productPurchases "+ productPurchases)
  const customerData = getCustomerDataIdByProductPurchases(productPurchases);
  console.log('customerData '+customerData)
  console.log("I an in getCustDataProductComp customerData"+customerData)

  const enrichedCustData = enrichCustomerDataCustName(customerData,customers);
  console.log("I an in getCustDataProductComp enrichedCustData"+ enrichedCustData)

  productData.enrichedCustData = enrichedCustData;

  console.log("productData:", productData);

  return  Promise.resolve(productData);
};

export const mergeObjectsByCustomerID = (inputArray) => {
  const customerMap = new Map();

  // Iterate through the input array
  inputArray.forEach((obj) => {
    const { customerID } = obj;

    if (!customerMap.has(customerID)) {
      // If the customerID is not in the map, add it with the current object
      customerMap.set(customerID, obj);
    } else {
      // If the customerID is in the map, merge the objects
      const existingObj = customerMap.get(customerID);
      console.log("existingObj" + existingObj);
      customerMap.set(customerID, { ...existingObj, ...obj });
    }
  });

  // Convert the map values back to an array
  const mergedArray = Array.from(customerMap.values());

  return mergedArray;
};

export const calculateTotalAmountPurchasedProduct = (product,purchases) => {
  console.log("purchases from the function:", purchases);
  console.log("productid from the function " + product.id);
  const matchingPurchases = purchases.filter((purchase) => {
    return purchase.productID == product.id;
  });
  // const totalMoneyEarned = matchingP?urchases.length *  product.price;
  console.log("matchingPurchases :" + matchingPurchases);

  const totalMoneyEarned = matchingPurchases.length * product.price;
  console.log("totalMoneyEarned :" + totalMoneyEarned);
  return totalMoneyEarned;
};
