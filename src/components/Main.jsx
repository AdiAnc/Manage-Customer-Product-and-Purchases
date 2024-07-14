import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles';

function Main() {
  const navigate = useNavigate();

  const centerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the content takes up at least the full viewport height
    backgroundColor: '#f8f9fa', // Light background color for contrast
  };

  return (
    <div style={centerStyles}>
      <div style={styles.container}>
        <h4>Welcome Main Page</h4>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate('/products')}>Products</button>
          <button style={styles.button} onClick={() => navigate('/customers')}>Customers</button>
          <button style={styles.button} onClick={() => navigate('/purchased')}>Purchased</button>
        </div>
      </div>
    </div>
  );
}

export default Main;