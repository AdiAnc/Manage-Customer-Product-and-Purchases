import React from 'react';
import ProductsList from "./ProductsList";
import styles from './styles';

function Products() {
  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the content takes up at least the full viewport height
    backgroundColor: '#f8f9fa', // Light background color for contrast
  };

  return (
    <div style={pageStyles}>
      <div style={styles.container}>
        <h4>Products Data</h4>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ flex: 1 }}>
          
          </div>
          <div style={{ flex: 1 }}>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
