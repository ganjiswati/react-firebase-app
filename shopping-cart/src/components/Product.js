import React from 'react';

function Product(props) {
  const { product } = props;
  return (

    <div>
      <div>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
      </div>
      <div>
        <button type="submit" onClick={()=>onAdd(product)}>Add To cart</button>
      </div>
    </div>
  )
};

export default Product;
