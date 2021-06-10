import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useApollo } from '../apollo/apollo-client';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="pokeApi with graphql consist of pokemon database and small feature" key="description" />
        <meta property="og:title" content="Pokémon graphql" key="ogtitle" />
        <meta property="og:description" content="pokeApi with graphql consist of pokemon database and small feature" key="ogdescription" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />{' '}
    </ApolloProvider>
  );
}
export default MyApp;
