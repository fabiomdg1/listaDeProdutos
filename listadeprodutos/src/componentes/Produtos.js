/* Este componente é o responsável por renderizar um único produto */

import React, {useState} from "react";

const Produto = ({nome, preco, descricao, onDelete, onAtualizar}) =>{
    // const [editando, setEditando] = useState(false);

    // const handleEditar = () => {
    //     setEditando(true);
    //   };
    
    //   const handleCancelar = () => {
    //     setEditando(false);
    //   };
    
    //   const handleAtualizar = () => {
    //     // Implemente a lógica para atualizar o produto
    //     // Aqui você pode chamar a função onAtualizar passando os novos dados do produto
    //     setEditando(false);
    //   };

    return (
        <div className="produto">
            <p><strong>Nome: </strong>{nome}</p>           
            <p><strong>Preço:</strong>{preco}</p>
            <p><strong>Descrição:</strong>{descricao}</p>
            <button onClick={onDelete}>Excluir</button>
            <button onClick={onAtualizar}>Editar</button>
        </div>
    );
};

export default Produto;