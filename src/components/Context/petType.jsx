import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const PetAge = createContext()
const PetType = ({ children }) => {

  const [pet, setPet] = useState('');

  const descriptionPet = () => {
    if (pet === 'Perro') {
      const descriptionDog = 'Es común escuchar que "un año humano equivale a siete años perros", pero en realidad no es del todo preciso. Los perros envejecen de manera diferente a los humanos y su tasa de envejecimiento varía según la raza y el tamaño del perro.'
      return descriptionDog;
    }

    if (pet === 'Gato') {
      const descriptionCat = 'Se suele decir que un año humano equivale a siete años de gato, pero no es exacto. Durante los dos primeros años de vida, un gato envejece más rápido que los humanos, y luego más lento. Por ejemplo, un gato de un año tiene la edad de un humano de 15 años y un gato de 5 años es como un humano de 36 años. Pero esto es solo una aproximación.'
      return descriptionCat;
    }

    if (pet === 'Hamster') {
      const descriptionHamster = 'Es importante conocer la edad humana de tu hámster para brindarle el cuidado adecuado. Por lo general, cada año humano equivale a unos 2 años de vida de un hámster. Sin embargo, la esperanza de vida varía según la especie, así que debes investigar la especie específica de tu mascota para conocer mejor sus necesidades de cuidado.'
      return descriptionHamster;
    }

    if (pet === 'Conejo') {
      const descriptionBunny = 'Un año humano equivale a unos 5 años de vida para un conejo en promedio. La edad real de tu mascota y su salud pueden variar según su raza y estilo de vida.'
      return descriptionBunny;
    }

    if (pet === 'Iguana') {
      const descriptionIguana = 'La edad de una iguana depende de su especie, alimentación, cuidado y ambiente. En cautiverio, algunas especies pueden vivir más de 20 años. Aunque no hay una equivalencia precisa entre la edad humana y de iguanas, se ha propuesto que un año humano equivale a unos 4-5 años de vida de una iguana, pero puede variar según la especie y otros factores.'
      return descriptionIguana;
    }

    if (pet === 'Tortuga') {
      const descriptionTortuga = 'La edad de las tortugas varía según la especie, pero en promedio, se estima que una tortuga puede vivir entre 80 y 150 años. Comparado con la esperanza de vida humana, que es de alrededor de 70-80 años, podemos decir que una tortuga vive mucho más que un humano.'
      return descriptionTortuga;
    }

    if (pet === 'Loro') {
      const descriptionLoro = 'La tasa de envejecimiento varía según la especie y otros factores, por lo que no se puede determinar exactamente cuántos años loro equivalen a un año humano. En general, los loros viven alrededor de 50 a 70 años y los humanos tienen una esperanza de vida promedio de 70 a 80 años. Por lo tanto, aproximadamente un año humano equivale a 0.7 a 1 año loro en términos de esperanza de vida, pero esta es solo una estimación general.'
      return descriptionLoro;
    }
  }

  const typePet = (namePet) => {
    setPet(namePet)
  }
  return (
    <PetAge.Provider
      value={{
        pet,
        descriptionPet,
        typePet
      }}
    >
      {children}
    </PetAge.Provider>
  )
}

export default PetType
