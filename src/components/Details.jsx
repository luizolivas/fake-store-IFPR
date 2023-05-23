import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Details.css';

export default function Details() {
  const { productId } = useParams();
  const [produto, setProduto] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }, []);

  console.log(produto);
  
  return (
    <div className="details-container">
      <h1>Product Details</h1>
      <img className="product-image" src={produto.image} alt={produto.title} />
      <h2 className="product-title">{produto.title}</h2>
      <p className="product-price">{produto.price}</p>
      <p className="product-description">{produto.description}</p>
      <p className="product-category">{produto.category}</p>
      <a className="back-link" href="/">Back to Home</a>
    </div>
  );
}
