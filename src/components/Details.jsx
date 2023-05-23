import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { productId } = useParams();

  // Aqui você pode usar o ID do produto para buscar os detalhes do produto em uma API ou em algum outro local
  // e renderizar as informações na tela.

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      {/* Renderize as demais informações do produto aqui */}
    </div>
  );
}

export default Details;
