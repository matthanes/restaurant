import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import "@fontsource/montaga";
import "@fontsource/montez";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="author" content="Matt Hanes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
