/* Este componente é o responsável por renderizar a lista de produtos */

import React, {useState} from "react";
import Produto from "./Produtos";


//const ListaDeProdutos = ({produtos, onExcluirProduto}) =>{
const ListaDeProdutos = (props) =>{


  return (
    <div className="lista-de-produtos">
        {props.produtos.map(produto => (
            <Produto
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                onDelete={() => props.onExcluirProduto(produto.id)}
            />
        ))}
    </div>
  )

}

export default ListaDeProdutos;