import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Products from './components/Products';
import Main from './components/Main';
import Customers from './components/Customers';
import Purchased from './components/Purchased';

function App() {
 

  return (
   
    <>
      <Routes>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/customers" element={<Customers />}/>
        <Route exact path="/purchased" element={<Purchased />}/>
        <Route exact path="" element={<Main />}/>
      </Routes>
    </>
 
 )
}

export default App
