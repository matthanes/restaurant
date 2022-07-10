import Head from "next/head";
//import menuData from "../components/data/menudata.json";
import MenuParser from "../components/MenuParser";

const menu = ({menuData2}) => {
  return (
    <>
      <Head>
        <title>Taste of India - Menu</title>
        <meta name="description" content="Take a look at our menu." />
      </Head>

      <main className="relative min-h-fullpage bg-slate-800 text-slate-200 pt-8">
        <h1 className="text-4xl font-montaga text-center underline mb-12 hidden">Menu</h1>
        <section className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-40 p-8">
          <div>
            <h2 className="font-montaga font-extrabold text-xl bg-rose-600 rounded py-2 mb-2 text-center">Clay Oven Specialties</h2>
            {/* <MenuParser menuData={menuData} filter="clayoven" />     */}
            <MenuParser menuData={menuData2['values']} filter="clayoven" />    
          </div>
          <div>
          <h2 className="font-montaga font-extrabold text-xl bg-rose-600 rounded py-2 mb-2 text-center">Entrees</h2>
          <h3 className="text-2xl font-montaga font-bold underline underline-offset-4 mb-3 text-center">Chicken Dishes</h3>
          {/* <MenuParser menuData={menuData} filter="entrees-chicken" />    */}
          <MenuParser menuData={menuData2['values']} filter="entrees-chicken" />   
          <h3 className="text-2xl font-montaga font-bold underline underline-offset-4 mb-3 text-center">Lamb Dishes</h3>
          {/* <MenuParser menuData={menuData} filter="entrees-lamb" />    */}
          <MenuParser menuData={menuData2['values']} filter="entrees-lamb" />   
          </div>
        </section>
      </main>
    </>
  );
};


export async function getStaticProps() {
  const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1c37CH30J1qQCEMfZ_l_j_Tbf_ndoyLxBCTQPRNIVVcE/values/Sheet1?alt=json&key=${process.env.SHEETS_API_KEY}`)
  const menuData2 = await res.json()
  return {

    props: {menuData2}
  }
}
export default menu;
