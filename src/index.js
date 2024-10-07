import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualizado para importar o cliente
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Criação da raiz
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
