import React from 'react';
import './associacao.css';
import logo from '../associacao/logo.jpg';
import produtoresAssociados from '../associacao/produtoresAssociados.jpeg';


const Associacao = () => {
    return (
        <div >
            <img src={logo} className='logohistoria'/>
            <br></br>
            <h1 className="tit" >História da Associação</h1>
            <br></br>
            <p>
            <b>APROQUEIJO</b> – Associação dos Produtores de Queijo Artesanal da Serra Geral
            </p>

            <p className="text">
                Agricultores reconhecidos e produtos premiados com medalhas de prata e bronze no Prêmio Queijo Brasil.
    Porteirinha é pioneira no processo de regulamentação da produção do Queijo Artesanal da Serra Geral. 
    Giro significativo na economia, no turismo gastronômico e desenvolvimento regional. 

            </p>
<br></br>
        <p>
            Nossas redes sociais:<br></br>
        INSTAGRAM: {/* @queijoartesanaldaserrageral */}
        <a href="https://instagram.com/queijoartesanaldaserrageral?igshid=123ktffdkr845"> @queijoartesanaldaserrageral</a>

        <br></br>
        FACEBOOK:  {/* @queijoartesanaldaserrageral */}
        <a href="https://www.facebook.com/queijoartesanaldaserrageral/"> @queijoartesanaldaserrageral</a>
        </p>
<br></br>
        <h3 className="tit">
        VEJA AS QUEIJARIAS ASSOCIADAS
        </h3>
<br></br>
        <img src={produtoresAssociados} className="listaProd"/>

        </div>
        
    )
};

export default Associacao;