/* Este componente é o responsável por renderizar a lista de produtos */

import React, {useState} from "react";
import Produto from "./Produtos";


const ListaDeProdutos = ({produtos, onExcluirProduto}) =>{

  return (
    <div className="lista-de-produtos">
        {produtos.map(produto => (
            <Produto
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
                onDelete={() => onExcluirProduto(produto.id)}
            />
        ))}
    </div>
  )

}

export default ListaDeProdutos;