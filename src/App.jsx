import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Importando o roteador
import './App.css';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Projetos from './components/Projetos';
import ProjectDetails from './components/ProjectDetails'; // Componente de detalhes do projeto

const Header = () => {
  const location = useLocation();
  
  // Renderiza o header apenas na rota inicial
  if (location.pathname !== '/') {
    return null; // Não renderiza o header em outras rotas
  }

  return (
    <header className="text-center py-5 bg-gray-900">
      <h1 className="text-3xl font-bold text-white">Olá, eu sou o Matheus, desenvolvedor Front-End!</h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* O header agora é um componente separado */}
        <main className="p-5 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<><Sobre /><Projetos /><Contato /></>} />
            <Route path="/project/:id" element={<ProjectDetails />} /> {/* Rota para detalhes do projeto */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
