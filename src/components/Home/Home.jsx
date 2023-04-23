import React from 'react';
import Nav from './Nav/Nav';
import FormPage from './Form/FormPage';
import select from '../../assets/Icons/select.png'
import './home.css'

const Home = () => {
  return (

    <div className='containerHome'>
      <Nav />
      <div className='contentHome'>
        <div className='d-flex justify-content-center mt-5'>
          <img className='iconSelect' src={select} />
          <h1 className='mx-5'>Elige tu mascota</h1>
        </div>
        <FormPage />
      </div>

    </div>
  )
}

export default Home