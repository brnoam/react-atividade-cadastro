import React from "react";
import "./Cadastro.css";


export default function Cadastro (){

    return (<div>

     <div className="principal">
     <form className="form">
      

      <div className="titulo">

          <h1>Cadastro </h1>
          <p>Preencha os dados abaixo para começar.</p>

      </div>


      <div >
          <input className="nome" type="text" name= "username" placeholder="Nome"/>
      </div>

      <div >
          <input className="sobrenome" type="text" name= "Sobrenome" placeholder="Sobrenome"/>
      </div>

      <div >
          <input className="email" type="email" name= "email" placeholder="E-mail"/>
      </div>


      <div >
          <input className="senha" type="password" name= "senha" placeholder="Senha"/>
      </div>

      <div>
           <button className="botao">Concluir Cadastro</button>
      </div>

     </form>

     </div>



     <div>
         
         <img className="logo" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"/>
        <h1 className="legenda">App React</h1>    
     </div>

















    </div>);
}