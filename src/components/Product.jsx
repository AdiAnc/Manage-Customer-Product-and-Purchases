import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions/products';
import CustomeRegion from './CustomeRegion';
import { useSelector } from 'react-redux';
import { getCustDataProductComp } from '../utils.jsx/utils';
import styles from './styles';

const Product = ({ data, purchases, customers }) => {
  const dispatch = useDispatch();
  const [enrichedCustData, setEnrichedCustData] = useState(null);

  useEffect(() => {
    const enrichedCustDataFunction = async () => {
      let enrichedCustData = await getCustDataProductComp(data, purchases, customers);
      setEnrichedCustData(enrichedCustData);
    };
    enrichedCustDataFunction();
  }, []);

  return (
    <div style={styles.container}>
      <div style={{ flex: 1 }}>
        <h4>Product Data</h4>
        Name: {data.name} <br />
        Price: {data.price} <br />
        Quantity: {data.quantity}
        <br />
      </div>
      <div style={{ flex: 1 }}>
        {enrichedCustData && (
          <CustomeRegion enrichedCustData={enrichedCustData.enrichedCustData} productID={data.id} customers={customers} />
        )}
      </div>
    </div>
  );
};

export default Product;
