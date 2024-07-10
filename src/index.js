import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Estilos globais, opcional
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App/App'; // Componente principal do aplicativo
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você quiser medir o desempenho do seu aplicativo, passe uma função
// para reportWebVitals. Exemplo:
reportWebVitals();
