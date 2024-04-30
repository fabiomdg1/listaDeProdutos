import './App.css';
import React, { useState } from 'react';
import FormularioInserirProduto from './componentes/FormularioInserirProduto';
import ListaDeProdutos from './componentes/ListaDeProdutos';

function App() {

  // Estado para armazenar a lista de produtos
  const [listaProdutos, setListaProdutos] = useState([
    { id: 1, nome: "Produto Lista 1", preco: 10.99, descricao: "Descrição do Produto Lista 1" },
    { id: 2, nome: "Produto Lista 2", preco: 20.99, descricao: "Descrição do Produto Lista 2" },
    { id: 3, nome: "Produto Lista 3", preco: 30.99, descricao: "Descrição do Produto Lista 3" }
  ]);

  const adicionarNovoProduto = (novoProduto) => {
    // setListaProdutos([...listaProdutos, novoProduto]);
    setListaProdutos((prevListaProdutos) => [...prevListaProdutos, novoProduto]);
  };

  const excluirProduto = (idProduto) => {
    const novaListaProdutos = listaProdutos.filter(produto => produto.id !== idProduto);
    setListaProdutos(novaListaProdutos);    
  };

  const atualizarProduto = (idProduto, novosDadosProdutos) => {
    const novaListaProdutos = listaProdutos.map(produto => {
      if(produto.id === idProduto) {
        return { ...produto, ...novosDadosProdutos};
      } else {
        return produto;
      }
    });
    setListaProdutos(novaListaProdutos);
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <FormularioInserirProduto onAdicionarProduto={adicionarNovoProduto}/>
      <ListaDeProdutos produtos={listaProdutos} onExcluirProduto={excluirProduto} onAtualizarProduto={atualizarProduto}/>   
      <atualizarItem  itens={listaProdutos} onAdicionarProduto={atualizarProduto}/>   
    </div>
  );
}

export default App;
