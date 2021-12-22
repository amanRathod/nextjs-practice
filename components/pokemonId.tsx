import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";
const connectDB = require("../lib/mongodb");
import styles from "../styles/Home.module.css";


export default function Home({ pokemonDetail }: any): any {
  return (
    <>
      <Link href="/" as="/">
        <a>Back to Home</a>
      </Link>
      <div>
        <h1>This is Pokemon</h1>
        <div>
          <img
            style={{ width: "500px", height: "500px" }}
            src={`https://img.pokemondb.net/artwork/large/${pokemonDetail.name}.jpg`}
            alt="loading..."
          />
        </div>
        <div>
          <div>
            <h1>{pokemonDetail.name}</h1>
          </div>

          <div>
            <ul>
              <li>
                <strong>Height:&nbsp;&nbsp;</strong>
                {pokemonDetail.height}
              </li>
              <li>
                <strong>Weight:&nbsp;&nbsp;</strong>
                {pokemonDetail.weight}
              </li>
              <li>
                <strong>Base Experience:&nbsp;&nbsp;</strong>
                {pokemonDetail.base_experience}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <h1>Stats</h1>
          </div>
          <div>
            {pokemonDetail.stats &&
              pokemonDetail.stats.map((item, index) => (
                <div key={index}>
                  <div>
                    <strong>
                      <p>{item.stat.name}: </p>
                    </strong>
                  </div>
                  <div>
                    <div>
                      <div style={{ width: `${item.base_stat}%` }} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
