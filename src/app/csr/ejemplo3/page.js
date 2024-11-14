'use client'
import { useState, useEffect } from "react";


function Page() {
    const [personajes, setPersonaje] = useState([])

    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products));

        const fetchData = async () => {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const data = await res.json()

            setPersonaje(data.results)
        }
        fetchData()

    }, [])


    return (
        <>      
             <h2 className="text-xl font-bold text-center">Ejemplo 3: CSR React</h2>
            <ul>
                {
                    personajes.map(personaje => (
                        <li key={Personaje.id} className="py-20 text-center">
                            <img src={Personaje.image} alt="foto" className="mx-auto" />
                            <b>{Personaje.name}:</b> 
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
