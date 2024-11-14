export const dynamic = 'force-dynamic';


async function fetchProducts() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.results;
}


export default async function Page() {
  const personajes = await fetchPersonajes();

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 3: SSR Next</h2>
      <ul>
        {personajes.map(personaje => (
          <li key={personaje.id} className="py-20 text-center">
            <Image
              src={personaje.image}
              alt={personaje.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <b>{personaje.name}:</b> 
          </li>
        ))}
      </ul>
    </>
  );
}
