import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";
const connectDB = require("../lib/mongodb");
import styles from "../styles/Home.module.css";
import AllPokemon from "../components/allPokemon";
import SpiderMan from '../components/allSpiderman';

const Post = {
  title: "",
  content: "",
  image: "",
  date: "",
};

const link = "https://pokeapi.co/api/v2/";

export async function GetUserData() {
  try {
    const response = await axios.get(`${link}/pokemon?limit=100&offset=200`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await GetUserData();
  const superResponse = await axios.get(`https://superheroapi.com/api.php/3028057257475815/search/spider`);

  return {
    revalidate: 10,
    props: {
      data: response.results,
      superData: superResponse.data.results
    },
  };
};


export default function Home(props: any) {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: 'center' }}>Pokemon Collection</h1>
      <div style={{ display: 'flex', }}>

        <div className={styles.grid}>
          {props.data.map((item) => (
            <div key={item.name}>
              <AllPokemon item={item} />
            </div>
          ))}
        </div>
        <div>
          {
            props.superData.map((item) => (
              <div key={item.id}>
                <SpiderMan item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
