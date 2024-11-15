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
                        <li key={personaje.id} className="py-20 text-center">
                            <img src={personaje.image} alt="foto" className="mx-auto" />
                            <b>{personaje.name}:</b> {personaje.created}
                        </li>
                    ))

                }
            </ul>
        </>
    )
}

export default Page  
