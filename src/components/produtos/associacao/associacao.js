import React from 'react';
import './associacao.css';
import logo from '../associacao/logo.jpg';


const Associacao = () => {
    return (
        <div>
            <img src={logo} className='logohistoria'/>
            <h1>História da Associação</h1>
            <p>
            APROQUEIJO – Associação dos Produtores de Queijo Artesanal da Serra Geral
            </p>

            <p>
            Agricultores reconhecidos e produtos premiados com medalhas de prata e bronze no Prêmio Queijo Brasil.
    Porteirinha é pioneira no processo de regulamentação da produção do Queijo Artesanal da Serra Geral. 
    Giro significativo na economia, no turismo gastronômico e desenvolvimento regional. 

            </p>

        <p>
        INSTAGRAM: @queijoartesanaldaserrageral
        <br></br>
        FACEBOOK:  @queijoartesanaldaserrageral
        </p>

        <p>
        VEJA AS QUEIJARIAS ASSOCIADAS:
        </p>

        </div>
        
    )
};

export default Associacao;