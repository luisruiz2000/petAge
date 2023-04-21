import React from 'react'
import './assets/css/App.css'
import Page from './components/Page/Page'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Page} />
        <Route path='/home' Component={Home} />

      </Routes>
    </div>
  )
}

export default App
