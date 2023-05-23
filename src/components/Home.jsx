import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './NavBar';
import { Link, useNavigate  } from 'react-router-dom';


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
    <div>
      <Navbar />
      <div className="container">
        <div className="card-container">
          {produtos.map((produto) => (
            <div className="card" key={produto.id}>
            <img src={produto.image} alt={produto.title} />
            <h3>{produto.title}</h3>
            <p>{produto.price}</p>
            <p>{produto.description}</p>
            <button onClick={() => irTelaDetalhe(produto.id)}> Ver Detalhes </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Home;
