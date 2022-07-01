import React from 'react';
import Product from './Product';
//import Product from './components/Product';
//import Data from '../Data';



function Main(props){
  const { products,onAdd } = props;
  // alert("in app");
  // console.log("Hhello");
  console.log("Products:-",products);
  return(
  <main className="block col-2">
    <h2>Products</h2>

    <div className ="row">
     {products.map((product)=>(
      <Product key={product.id} product={product} onAdd={onAdd}></Product>
     ))}
    </div>
  </main>
)}
export default Main;


