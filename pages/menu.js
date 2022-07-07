import Head from "next/head";
import ImageCard from "../components/ImageCard";
import { WebDevCardData } from "../components/data/WebDevCardData";

const menu = () => {
  return (
    <>
      <Head>
        <title>Matt Hanes Portfolio - Web Development</title>
        <meta
          name="description"
          content="Take a look at our menu."
        />
      </Head>

      <main className="relative h-fullpage bg-slate-800 text-white">
        <section className="max-w-6xl mx-auto">
          Stuff
        </section>
      </main>
    </>
  );
};

export default menu;
