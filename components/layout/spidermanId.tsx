import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";
// const connectDB = require("../lib/mongodb");
import styles from "../styles/Home.module.css";


export default function Home({ spidermanDetail }: any): any {
  return (
    <>
      <Link href="/" as="/">
        <a>Back to Home</a>
      </Link>
      <div className="row-1">
        <div style={{ marginTop: 100 }}>
          <img src={spidermanDetail.image.url} />
        </div>
        <div style={{ marginTop: 100 }}>

          <div><h1>${spidermanDetail.name}</h1></div>

          <div>
            <h2>Biography</h2>
            <ul>
              <li><strong>Full name :</strong> ${spidermanDetail.biography['full-name']}</li>
              <li>Place of birth : ${spidermanDetail.biography['place-of-birth']}</li>
              <li>First appearance : ${spidermanDetail.biography['first-appearance']}</li>
              <li>Alignment : ${spidermanDetail.biography.alignment}</li>
            </ul>
          </div>

          <div>
            <h2>Appearance</h2>
            <ul>
              <li><strong>Gender :</strong> ${spidermanDetail.appearance.gender}</li>
              <li>Race: ${spidermanDetail.appearance.race}</li>
              <li>Height : ${spidermanDetail.appearance.height[0]}</li>
              <li>weight : ${spidermanDetail.appearance.weight[1]}</li>
              <li>eye-color : ${spidermanDetail.appearance['eye-color']}</li>
            </ul>
          </div>

        </div>
      </div>

      <div style={{ marginTop: 100 }}>

        <div>

          <div>
            <h2>PowerStats</h2>
            <ul>
              <li><strong>Intelligence :</strong> ${spidermanDetail.powerstats.intelligence}</li>
              <li>Strength : ${spidermanDetail.powerstats.strength}</li>
              <li>Speed : ${spidermanDetail.powerstats.speed}</li>
              <li>Durability : ${spidermanDetail.powerstats.durability}</li>
              <li>Power : ${spidermanDetail.powerstats.power}</li>
            </ul>
          </div>


          <div>
            <h2>Connections</h2>
            <ul>
              <li><strong>Group affiliation :</strong> ${spidermanDetail.connections['group-affiliation']}</li>
              <li>Relatives : ${spidermanDetail.connections.relatives}</li>
            </ul>
          </div>

        </div>

        <div className="row-2-right">
          <div>
            <h2>Work</h2>
            <ul>
              <li><strong>Occupation :</strong> ${spidermanDetail.work.occupation}</li>
              <li>Base : ${spidermanDetail.work.base}</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}
