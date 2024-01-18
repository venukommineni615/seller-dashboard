import Form from './components/Form'
import './App.css';
import ElectronicItems from './components/Filter-components/ElectronicItems';
import FoodItems from './components/Filter-components/FoodItems';
import SkincareItems from './components/Filter-components/SkincareItems';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const localStorageKeys=Object.keys(localStorage)
    setProducts(localStorageKeys)
  },[])
  
  return (
    <div className="App">
      <Form></Form>
      <ElectronicItems products={products} setProducts={setProducts}></ElectronicItems>
      <FoodItems products={products}  setProducts={setProducts}></FoodItems>
      <SkincareItems products={products}  setProducts={setProducts}></SkincareItems>
    </div>
  );
}

export default App;
