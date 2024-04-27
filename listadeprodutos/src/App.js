import './App.css';
import Produto from './componentes/Produtos';

function App() {

  const produtosExemplo = [
    { id: 1, nome: 'Produto 1', preco: 10.99, descricao: 'Descrição do Produto 1' },
    { id: 2, nome: 'Produto 2', preco: 19.99, descricao: 'Descrição do Produto 2' }
  ]
   

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <Produto/>
    </div>
  );
}

export default App;
