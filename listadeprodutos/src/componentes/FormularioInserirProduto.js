import React, { useState } from "react";

const FormularioInserirProduto = ({ onAdicionarProduto }) => {

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = {
      id: Date.now(), // Gera um ID único para o novo produto
      nome,           // Captura o valor que estiver no campo nome do formumário  
      preco,          // Captura o valor que estiver no campo preco do formumário
      descricao       // Captura o valor que estiver no campo descrição do formumário
    };

    onAdicionarProduto(novoProduto);
    // Limpar os campos do formulário após adicionar o produto
    setNome("");
    setPreco("");
    setDescricao("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço do Produto"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição do Produto"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default FormularioInserirProduto;
