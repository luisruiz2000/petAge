import React from 'react';
import Nav from './Nav/Nav';
import FormPage from './Form/FormPage';
import './home.css'
import select from '../../assets/Icons/select.png'

const Home = () => {
  return (

    <div className='d-flex justify-content-center'>
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