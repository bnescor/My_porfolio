import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateTheme from './Context/StateTheme.jsx'
import StateIdioma from './Context/StateIdioma.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateTheme>
      <StateIdioma>
        <App />
      </StateIdioma>
    </StateTheme>
  </React.StrictMode>,
)
