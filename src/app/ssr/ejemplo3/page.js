export const dynamic = 'force-dynamic';

async function fetchPersonajes() {
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
            <img src={personaje.image} alt="foto" className="mx-auto" />
            <b>{personaje.name}:</b> {personaje.created}
          </li>
        ))}
      </ul>
    </>
  );
}
