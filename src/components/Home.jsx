import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './NavBar';
import Footer from './Footer';
import { Link, useNavigate  } from 'react-router-dom';
import star from '../assets/star-full.svg'



function Home() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  const irTelaDetalhe = (id) => {
    navigate('/product/' + id)
  }

  return (
    <div className='main'>
      <Navbar />
      <div className="container">
        <div className="card-container">
          {produtos.map((produto) => (
            <div className="card" key={produto.id}>
            <img src={produto.image} alt={produto.title} />
              <div className='rating'>
                <h2>Avaliação: {produto.rating.rate}</h2>
                <img className='image' src={star}></img>
               </div>
            <h3>{produto.title}</h3>
            <p className='ProductPrice'>R${produto.price}</p>
 
            <button className='button' onClick={() => irTelaDetalhe(produto.id)}> Ver Detalhes </button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default Home;
