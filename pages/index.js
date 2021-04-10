import Head from "next/head";
import collectionData from "@/data/collectionData.json";
import Card from "@/components/Card";

export default function Home({ myCards }) {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Pokemon Card Collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold">Pokemon Card Collection</h1>
        <p className="text-gray-400 mt-3">Work in Progress</p>
      </header>
      <main>
        <div className="container mx-auto">
          <ul className="max-w-4xl mx-auto flex flex-wrap justify-center space-around">
            {myCards.map((card) => (
              <Card data={card} key={card.id} />
            ))}
          </ul>
        </div>
        <footer className="flex flex-col items-center justify-center py-12">
          <p className="text-gray-400 mt-3">
            Card Images from the{" "}
            <a
              className="text-white underline"
              href="https://pokemontcg.io/"
              target="_blank"
            >
              pokemontcg.io
            </a>{" "}
            API.
          </p>
        </footer>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const myCards = collectionData.cards;

  return {
    props: { myCards },
  };
}
