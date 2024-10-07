import React from 'react';
import './App.css';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="App">
      <header className="text-center py-5 bg-gray-900">
        <h1 className="text-3xl font-bold text-white">Bem-vindo ao meu site pessoal!</h1>
      </header>
      <main className="p-5 max-w-4xl mx-auto">
        <Sobre />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}

export default App;
