import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeProvider } from './components/pages/DarkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </React.StrictMode>
);

