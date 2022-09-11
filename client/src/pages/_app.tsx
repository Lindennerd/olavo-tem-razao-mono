import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </MainLayout>
  );
}

export default MyApp;
