import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import PokemonId from 'components/pokemonId';

const link = "https://pokeapi.co/api/v2/";

export async function GetUserData(name) {
  try {
    const response = await axios.get(`${link}/pokemon/${name}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// // serversiderendering in nextjs is not working with this function
// export const getServerSideProps = async (context) => {
//   const { params, req, res, query } = context;
//   const { pokemonName } = params;

//   res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=Strict');

//   const response = await GetUserData(pokemonName);
//   console.log('responsee', response);

//   return {
//     props: {
//       pokemonDetail: response
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await GetUserData(params.pokemonName);

  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: { pokemonDetail: response },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`${link}/pokemon?limit=100&offset=200`);
  const data = response.data.results;

  const paths = data.map((item) => ({
    params: { pokemonName: item.name },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default function Post({ pokemonDetail }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>...is Loading</h1>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
     <PokemonId pokemonDetail={pokemonDetail} />
    </div>
  );
}


// set fallback to true to enable getStaticPaths but always do for specific no.of paths
// to avoid load time issues for fetching all params for large list like 10000+ routes