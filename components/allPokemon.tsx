/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home({item}: any): any {
  return (

    <div>
      <img
        style={{ width: "500px", height: "500px" }}
        src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
        alt="loading..."
      />

      <div>
        <div>{item.name}</div>
      </div>

      <div>
        <button type="button">
          <Link
            href={`/pokemon/[pokemonName]`}
            as={`/pokemon/${item.name}`}
            passHref
          >
            <span>Read more</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
