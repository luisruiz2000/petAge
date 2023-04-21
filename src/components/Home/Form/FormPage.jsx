import React, { useContext, useEffect, useState } from 'react'
import { PetAge } from '../../Context/petType'
import './form.css'

const FormPage = () => {

  const { pet, descriptionPet } = useContext(PetAge)
  const resultDescription = descriptionPet()


  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState(0);
  const [error, setError] = useState({ empty: '', errorName: '' });
  const [operationResult, setOperationResult] = useState('');


  const onChangeName = (e) => {
    const value = e.target.value
    setPetName('')
    setError({
      ...error,
      errorName: ''
    })
    const regEx = /^[a-zA-Z ]+$/
    if (!regEx.test(value)) {
      setError({
        ...error,
        errorName: 'Este campo solo permite letras y espacios'
      })
    } else {
      setPetName(value)
    }
  }

  const onChangeAge = (e) => {
    setError({
      ...error,
      empty: ''
    })
    const value = e.target.value
    setPetAge(value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setOperationResult('')
    setError({ empty: '', errorName: '' })
    if (!resultDescription) {
      alert('<= Seleciona una mascota')
      return
    }
    if (!petName || !petAge) {
      setError({
        ...error,
        empty: 'Todos los campos son obligatorios'
      })
    }

    if (pet === 'Perro') {
      setOperationResult(`${petAge * 7} Años`)
      return
    }

    if (pet === 'Gato') {
      let ageCat = 0;
      if (petAge === 1) {
        ageCat = 15;
      } else if (petAge === 2) {
        ageCat = 24
      } else {
        ageCat = 24 + (petAge - 2) * 4
      }
      setOperationResult(`${ageCat} Años`)
      return
    }

    if (pet === 'Hamster') {
      setOperationResult(`${petAge * 2} Años`)
      return
    }

    if (pet === 'Conejo') {
      setOperationResult(`${petAge * 2} Años`)
      return
    }

    if (pet === 'Iguana') {
      setOperationResult(`${petAge * 5} Años`)
      return
    }

    if (pet === 'Tortuga') {
      setOperationResult(`${petAge * 5} Años`)
      return
    }

    if (pet === 'Loro') {
      setOperationResult(`${petAge * 2} Años`)
      return
    }

  }
  return (
    <div className=' containerForm d-flex justify-content-center align-items-center'>
      <div>
        <form onSubmit={handleSubmit} className='line-right d-flex flex-column text-start align-items-center mb-4'>
          <input onChange={onChangeName} placeholder='Ingresa el nombre de tu mascota' className='inputsForm' type='text' />
          <p className='text-danger mb-2'>{error.errorName}</p>
          <input onChange={onChangeAge} placeholder={`Años humanos de ${petName ? petName : 'tu mascota'} `} className='inputsForm' type='number' />
          <p className='text-danger mb-2'>{error.empty}</p>
          <button type="submit" className="btn w-50 btn-warning btn-small py-2">Large button</button>
        </form><hr />
        <div className='text-start mt-4'>
          <span className='fs-3 text-success fw-bold'>{operationResult ? '¡Genial!' + ' ' + petName + ' ' + 'tiene' : ''}</span>
          <span className='fs-3 text-success fw-bold'> {operationResult}</span>
        </div>
      </div>
      <div className='w-50 h-50 px-5 text-start fs-5'>
        <h2>{pet}</h2>
        <div> {resultDescription ? resultDescription : 'Ten en cuenta que el resultado es un cálculo aproximado basado en la edad promedio de la especie. La edad real de tu mascota puede variar según muchos factores, como su raza, estilo de vida y salud.'}</div>
      </div>
    </div>
  )
}

export default FormPage;
