import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import PokemonId from '../../components/pokemonId';
import SpidermanId from '../../components/layout/spidermanId'
import Header from '../../components/Header';

const link = "https://pokeapi.co/api/v2/";

export async function GetUserData(spidermanId) {
  try {
    const response = await axios.get(`https://superheroapi.com/api.php/3028057257475815/${spidermanId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// serversiderendering in nextjs is not working with this function
export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  const { spidermanId } = params;

  res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');

  const response = await GetUserData(spidermanId);
  return {
    props: {
      pokemonDetail: response
    }
  }
}

const fetcher = async () => {
  const response = await axios.get(`https://superheroapi.com/api.php/3028057257475815/577`);
  return response.data;
}

export default function Post({ pokemonDetail }) {
  const { data, error } = useSWR('spiderman', fetcher);
  console.log('data', data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
     <SpidermanId spidermanDetail={pokemonDetail} />
     <hr />
     <SpidermanId spidermanDetail={data} />
    </div>
  );
}

Post.getLayout = function PageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  )
  
}
