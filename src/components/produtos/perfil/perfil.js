import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import swal from 'sweetalert';


const Perfil = () => {
  const [queijarias, setQueijarias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  var user = firebase.auth().currentUser;
  var email, nomequeijaria, nomeprodutor, endereco, telefone, nome;
  

  
  

  const getDataQueijarias = () => {
    firebase.database().ref(`/queijarias`).on('value', snapshot => {
      const temp = [];
      snapshot.forEach((item) => {
        temp.push(item.val());
      })
      setQueijarias(temp);
    })
  
}

const getDataProdutos = () => {
  firebase.database().ref(`/produtos`).on('value', snapshot => {
    const temp1 = [];
    snapshot.forEach((item1) => {
      temp1.push(item1.val());
    })
    setProdutos(temp1);
  })

}


  queijarias.map(item=>{
    if(user.email==item.email){
    email = item.email;
    nomequeijaria=item.nomequeijaria;
    nomeprodutor=item.nomeprodutor;
    endereco=item.endereco;
    telefone=item.telefone;

     produtos.map(item1=>{
      if(item.nomequeijaria==item1.queijaria){
      nome=item1.nome;
      }
    }) 
    }
  })

  useEffect(() => {
    getDataQueijarias();
    getDataProdutos();
    console.log("ee",queijarias);
  }, []);

  return (
    <div>
      <h1>Perfil</h1>

      <h2>{`Usuario: ${user.email}`}</h2>
      <h2>{`Email: ${email}`}</h2>
      <h2>{`Produtor: ${nomeprodutor}`}</h2>
      <h2>{`Queijaria: ${nomequeijaria}`}</h2>
      <h2>{`Endereco: ${endereco}`}</h2>
      <h2>{`Telefone: ${telefone}`}</h2>
      {/* <h2>{`Meus produtos:`}</h2>
      <h4>{`${nome}`}</h4> */}
      
    </div>

  )
};

export default Perfil;