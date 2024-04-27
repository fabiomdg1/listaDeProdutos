/* Este componente é o responsável por renderizar um único produto */

import React from "react";

const Produto = ({nome, preco, descricao, onDelete}) =>{
    return (
        <div className="produto">
            <p><strong>Nome: </strong>{nome}</p>           
            <p><strong>Preço:</strong>{preco}</p>
            <p><strong>Descrição:</strong>{descricao}</p>
            <button onClick={onDelete}>Excluir</button>
        </div>
    );
};

export default Produto;