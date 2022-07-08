import Head from "next/head";
import menuData from "../components/data/menudata.json";
const menu = () => {
  return (
    <>
      <Head>
        <title>Matt Hanes Portfolio - Web Development</title>
        <meta name="description" content="Take a look at our menu." />
      </Head>

      <main className="relative min-h-fullpage bg-slate-800 text-slate-200 pt-8">
        <h1 className="text-4xl font-montaga text-center underline mb-12 hidden">Menu</h1>
        <section className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40 p-8">
          <div>
            <h2 className="font-montaga font-extrabold text-xl bg-rose-600 rounded py-2 mb-2 text-center">Clay Oven Specialties</h2>
            {menuData
              .filter((item) => item.category === "clayoven")
              .map((dish, index) => (
                <article
                  className="flex flex-wrap items-center justify-between mb-8 col-span-1"
                  key={index}
                >
                  <h2 className="text-lg font-montaga uppercase font-semibold grow m-0">{dish.name}</h2>
                  <p className="font-semibold">${dish.price}</p>
                  <p className="font-sans flex flex-1 basis-full text-justify mt-3">
                    {dish.description}
                  </p>
                </article>
              ))}
          </div>
          <div>
          <h2 className="font-montaga font-extrabold text-xl bg-rose-600 rounded py-2 mb-2 text-center">Entrees</h2>
            {menuData
              .filter((item) => item.category === "entrees-chicken")
              .map((dish, index) => (
                <article
                  className="flex flex-wrap items-center justify-between mb-6 col-span-1"
                  key={index}
                >
                  <h2 className="text-lg font-montaga uppercase font-semibold grow m-0">{dish.name}</h2>
                  <p className="font-semibold">${dish.price}</p>
                  <p className="flex flex-1 basis-full text-justify mt-3">
                    {dish.description}
                  </p>
                </article>
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default menu;
