import React from 'react';
import { createRoot } from 'react-dom'; // Importe createRoot
import './index.css'; // Estilos globais, se necessário
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App/App'; // Componente principal do aplicativo
import reportWebVitals from './reportWebVitals';

// Utilize createRoot().render em vez de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser medir o desempenho do seu aplicativo, passe uma função
// para reportWebVitals. Exemplo:
reportWebVitals();
