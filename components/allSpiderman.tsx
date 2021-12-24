/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export default function Home({ item }: any): any {
  return (
    <div className="card-container">
      <div className="card-inner">
        <img
          width="500px"
          height="500px"
          src={item.image.url}
          alt="loading..."
          placeholder="blur"
          // blurDataURL="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
