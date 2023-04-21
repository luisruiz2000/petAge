import './nav.css'
import dog from '../../../assets/Icons/dog.png'
import cat from '../../../assets/Icons/cat.png'
import hamster from '../../../assets/Icons/hamster.png'
import bunny from '../../../assets/Icons/bunny.png'
import iguana from '../../../assets/Icons/iguana.png'
import tortuga from '../../../assets/Icons/tortuga.png'
import loro from '../../../assets/Icons/loro.png'
import { useContext } from 'react'

import { PetAge } from '../../Context/petType'



const Nav = () => {

  const { typePet } = useContext(PetAge)

  const onClickDog = () => {
    typePet('Perro')
  }

  const onClickCat = () => {
    typePet('Gato')
  }

  const onClickHamster = () => {
    typePet('Hamster')
  }

  const onClickBunny = () => {
    typePet('Conejo')
  }

  const onClickIguana = () => {
    typePet('Iguana')
  }

  const onClickTortuga = () => {
    typePet('Tortuga')
  }

  const onClickLoro = () => {
    typePet('Loro')
  }




  return (
    <div className='containerNav d-flex flex-column justify-content-around align-items-center'>
      <button onClick={onClickDog} className='iconHome'>
        <img className='icons' src={dog} />
        <p>Perro</p>
      </button>
      <button onClick={onClickCat} className='iconHome'>
        <img className='icons' src={cat} />
        <p>Gato</p>
      </button>
      <button onClick={onClickHamster} className='iconHome'>
        <img className='icons' src={hamster} />
        <p>Hamster</p>
      </button>
      <button onClick={onClickBunny} className='iconHome'>
        <img className='icons' src={bunny} />
        <p>Conejo</p>
      </button>
      <button onClick={onClickIguana} className='iconHome'>
        <img className='icons' src={iguana} />
        <p>Iguana</p>
      </button>
      <button onClick={onClickTortuga} className='iconHome'>
        <img className='icons' src={tortuga} />
        <p>Tortuga</p>
      </button>
      <button onClick={onClickLoro} className='iconHome'>
        <img className='icons' src={loro} />
        <p>Loro</p>
      </button>
    </div>
  )
}

export default Nav
