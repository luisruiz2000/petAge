import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import PetType from './components/Context/petType'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PetType>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </PetType>
)
