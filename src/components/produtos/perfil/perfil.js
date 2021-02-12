import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';







const Perfil = () => {

    var user = firebase.auth().currentUser;
    var email;
  
  if (user != null) {
    email = user.email;
  }else{
    email="";
    
  }


    return (
        <div>
            <h1>Perfil</h1>
    <h2>{`Página de perfil de ${email}`}</h2>
             </div>
        
    )
};

export default Perfil;