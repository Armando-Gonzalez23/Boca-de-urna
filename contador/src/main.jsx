import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App title="Boca de urnas" titulo="Candidato 1"/>
    <App titulo="Candidato 2"/>
  </React.StrictMode>
  
)