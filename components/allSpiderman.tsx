/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home({ item }: any): any {
  return (
    <div className="card-container">
      <div className="card-inner">
        <img 
        style={{ width: "500px", height: "500px" }}
        src={item.image.url}
        alt="loading..."
        />
        <div className="card-text">
          <h1>${item.name}</h1>
          <p>${item.connections.relatives}</p>
        </div>
        <Link
            href={`/spiderman/[spidermanId]`}
            as={`/spiderman/${item.id}`}
            passHref
          >

        <button type="button" className="btn" >View</button>
          </Link>
      </div>
    </div>
  );
}
