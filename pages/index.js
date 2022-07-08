import Head from "next/head";
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taste of India | Columbus, GA</title>
        <meta
          name="description"
          content="Taste of India is your home for authentic Indian Cuisine in Columbus, Georgia."
        />
      </Head>

      <main className="relative min-h-screen lg:min-h-0">
        <ExportedImage
          src="/restaurant/images/tikkanaan.jpg"
          layout="raw"
          width={1920}
          height={1080}
          alt="A night sky"
          className="h-screen lg:h-fullpage object-cover mx-auto"
        />
        <div className="absolute inset-0 w-full h-full min-h-screen lg:min-h-0 bg-slate-900 bg-opacity-80 flex justify-center items-center">
          <section className="text-white">
            <h1 className="text-8xl text-center font-montez my-8 px-4">Taste of India</h1>
            <p className="text-3xl text-center font-montaga px-4">Your home for authentic Indian Cuisine.</p>
          </section>
        </div>
      </main>
    </>
  );
}
