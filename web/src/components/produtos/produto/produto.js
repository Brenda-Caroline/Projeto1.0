import React from 'react';
import './produto.css';




const Produto = () => {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  const titulo = localStorage.getItem('@titulo');
  const preco = localStorage.getItem('@preco');
  const descricao = localStorage.getItem('@descricao');
  const quantidade = localStorage.getItem('@quantidade');
  const src = localStorage.getItem('@src');
    return (
        <div className="container">
            <h1 className="titulo">{`Produto: ${titulo}`}</h1>
            <img src={`${src}`} className="imgproduto"/>
            <p><h2 className="preco">{`Preço: R$${preco} reais`}</h2></p>
            <p><h2 className="descricao">{`Descrição: ${descricao} `}</h2></p>
            
            <p className="quantidade">
            {quantidade < 1 ? 'Sem estoque no momento' : `Quantidade disponível: ${quantidade}`}
            </p>
            </div>

        
    )
};

export default Produto;