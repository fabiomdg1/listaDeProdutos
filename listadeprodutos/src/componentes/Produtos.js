/* Este componente é o responsável por renderizar um único produto */

import React from "react";

const Produto = ({nome, preco, descricao}) =>{
    return (
        <div className="produto">
            <p>
                <strong>Nome: </strong>
                <h3>{nome}</h3>
            </p>
           
            <p><strong>Preço:</strong>{preco}</p>
            <p><strong>Descrição:</strong>{descricao}</p>
            <button>Excluir</button>
        </div>
    );
};

export default Produto;