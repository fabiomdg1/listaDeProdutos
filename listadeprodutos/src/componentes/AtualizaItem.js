import React, {useState} from "react";
import Produto from "./Produtos";

const AtualizaItem = (props) =>{

    const [editando, setEditando] = useState(false);
    
    const handleAtualizar = () => {
        setEditando(false);
    };

    return (
        <div className="atualiza-item">
            {props.itens.map(produto => (
                <Produto
                    key={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    onAtualizar={() => props.onAtualizarProduto(produto.id)}
                />
            ))}

        <form onSubmit={handleAtualizar}>
            <input
                type="text"
                placeholder="Nome do Produto"
                value={props.produto.nome}
                onChange={(e) => props.setNome(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Preço do Produto"
                value={props.produto.preco}
                onChange={(e) => props.setPreco(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Descrição do Produto"
                value={props.produto.descricao}
                onChange={(e) => props.setDescricao(e.target.value)}
                required
            />
            <button type="submit">Atualizar Item</button>
            </form>

        </div>
      
    );
};

export default AtualizaItem;


