import Head from "next/head";
import Header from "../components/Header";
import Slyder from "../components/slyder";
import Recomendation from "@/components/Recomendation";

export default function Home() {
  return (
    <>
      <Head>
        <title>ANIMEZONE</title>
        <meta name="description" content="seu site de animes criado em nextjs" />
      </Head>
      <Header />
      <main>
      <Slyder />
      <Recomendation />
      </main>
    </>
  );
}
