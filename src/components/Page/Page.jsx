import { Link } from 'react-router-dom'
import React from 'react'
import dog from '../../assets/Icons/dog.png'
import cat from '../../assets/Icons/cat.png'
import hamster from '../../assets/Icons/hamster.png'
import bunny from '../../assets/Icons/bunny.png'
import iguana from '../../assets/Icons/iguana.png'
import tortuga from '../../assets/Icons/tortuga.png'
import loro from '../../assets/Icons/loro.png'
import './page.css'
const Page = () => {
  return (
    <div className='containerPage d-flex align-items-center'>

      <section className='text-center m-5 p-5 w-50'>
        <p className='fs-1'>Mascotas disponibles</p>
        <div className='my-5 d-flex align-items-center justify-content-between'>
          <div><img className='icons' src={dog} />
            <p>Perro</p></div>
          <div>
            <img className='icons' src={cat} />
            <p>Gato</p>
          </div>
          <div>
            <img className='icons' src={hamster} />
            <p>Hamster</p>
          </div>
          <div>
            <img className='icons' src={bunny} />
            <p>Conejo</p>
          </div>
          <div>
            <img className='icons' src={iguana} />
            <p>Iguana</p>
          </div>
          <div>
            <img className='icons' src={tortuga} />
            <p>Tortuga</p>
          </div>
          <div>
            <img className='icons' src={loro} />
            <p>Loro</p>
          </div>

        </div>
        <Link to='home'>
          <button className='btn btn-lg btmPage'>Comenzar</button>
        </Link>
      </section>
      <section className='text-center w-50 px-3'>
        <h1>¡Calcula la edad de tu mascotas!</h1>
        <p className='fs-5 px-5'>¿Alguna vez te has preguntado cuántos años tiene tu mascota? ¡Esta herramienta te ayudará a descubrirlo de manera fácil y rápida!
          Solo ingresa la edad de tu mascota en años humanos y la aplicación calculará su edad equivalente en años de su especie.
          ¡No esperes más para conocer la verdadera edad de tu fiel compañero!</p>
      </section>
    </div>
  )
}

export default Page