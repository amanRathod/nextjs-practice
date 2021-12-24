import Head from 'next/head';
import '../styles/globals.css'
import Header from 'components/Header';
import Footer from 'components/Footer';


function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (<>
    <Head>
      <title>My page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
