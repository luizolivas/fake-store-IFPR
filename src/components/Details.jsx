import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './Details.css';
import Navbar from './NavBar';
import Footer from './Footer';
import star from '../assets/star-full.svg'

export default function Details() {
  const { productId } = useParams();
  const [produto, setProduto] = useState('');

  const navigate = useNavigate()
  const backHomeScreen = () =>{
      navigate('/')
    }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }, []);

  console.log(produto);
  
  return (
    <div className='main'>
      <Navbar />
      <div className="details-container">
      <h1>Detalhes do Produto</h1>
        <div>
          <img className="product-image" src={produto.image} alt={produto.title} />
        </div>
        <div className='rating'>
            <h2>Avaliação: {produto.rating?.rate || ''}</h2>
            <img className='image' src={star}></img>
        </div>
        <h2 className="product-title">{produto.title}</h2>
        <h2 className="product-price"> R${produto.price}</h2>
        <p className="product-description">{produto.description}</p>
        <button className="button" onClick={backHomeScreen}>VOLTAR</button>
      </div>
      <Footer />
    </div>
    
  );
}
