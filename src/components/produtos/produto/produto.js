import React, { Linking, Text, openURL } from 'react';
import './produto.css';
import UIButton from 'components/UI/Button/Button';
import { Link } from "react-router-dom";
import { isLogged } from 'components/utils/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { BiTrash } from 'react-icons/bi';




const Produto = ({ produtos}) => {

  let id = localStorage.getItem("@idproduto");

  const titulo = localStorage.getItem('@titulo');
  const preco = localStorage.getItem('@preco');
  const descricao = localStorage.getItem('@descricao');
  const quantidade = localStorage.getItem('@quantidade');
  const src = localStorage.getItem('@src');
  const queijaria = localStorage.getItem('@queijaria');
  const telefone = localStorage.getItem('@telefone');
  const emailProduto = localStorage.getItem('@emailProduto');
    
  
  const redireciona = ()=>{
    window.location.href=`https://api.whatsapp.com/send?phone=+55${telefone}&text=Olá, eu vim pela plataforma APROQUEIJO` ;
  }



  return (
    <div className="container">
      {/* <p><h2 className="preco">{`${titulo}`}</h2></p> */}
      <h1 className="titulo">{` ${titulo}`}</h1>
      <img src={`${src}`} className="imgproduto" />
      <p><h2 className="preco">{`Preço: R$${preco} reais`}</h2></p>
      <p><h2 className="descricao">{`Descrição: ${descricao} `}</h2></p>
      <p><h2 className="queijaria">{`Queijaria: ${queijaria} `}</h2></p>
      <p><h2 className="telefone">{`Telefone: ${telefone} `}</h2></p>
      <p><h2 className="telefone">{`Email: ${emailProduto} `}</h2></p>

      <p><h2 className="quantidade">{quantidade < 1 ? 'Sem estoque no momento' : `Quantidade disponível: ${quantidade}`}</h2></p>
      



      <div className="botao">
        <button className="button_envia" onClick={redireciona}> Enviar Mensagem </button>
        <br></br>
        <br></br>
        
        <UIButton component={Link} to={'/'} className="volta"> Voltar </UIButton>

        {/* <UIButton component={Link} to={'/'} className="enviar"> Enviar Mensagem </UIButton> */}
      </div>
      
     
      
    </div>



  );
}

export default Produto;