import Head from "next/head";
import Header from "../components/Header";
import Slyder from "../components/slyder";
import Recomendation from "../components/Recomendation";
import WatchNow from "../components/Watchnow";
import QueueList from "../components/QueueList"
import { useState, useEffect } from "react";
import YouMightLike from "../components/YouMightLike";

interface AnimeAttributes {
  canonicalTitle: string;
  posterImage: {
    small: string;
  };
  synopsis: string;
}

interface AnimeData {
  id: string;
  attributes: AnimeAttributes;
}

const Home = () => {
  const [queue, setQueue] = useState<AnimeData[]>([]);

  useEffect(() => {
    const storedQueue = localStorage.getItem('animeQueue');
    if (storedQueue) {
      setQueue(JSON.parse(storedQueue));
    }
  }, []);

  const handleAddToQueue = (anime: AnimeData) => {
    const isDuplicate = queue.some((item) => item.id === anime.id);

    if (!isDuplicate) {
      const updatedQueue = [...queue, anime];
      setQueue(updatedQueue);
      localStorage.setItem('animeQueue', JSON.stringify(updatedQueue));
    }
  };

  const handleRemoveFromQueue = (animeId: string) => {
    const updatedQueue = queue.filter((item) => item.id !== animeId);
    setQueue(updatedQueue);
    localStorage.setItem('animeQueue', JSON.stringify(updatedQueue));
  };

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
        <WatchNow onAddToQueue={handleAddToQueue} />
        <YouMightLike onAddToQueue={handleAddToQueue} />
  
      </main>
    </>
  );
};

export default Home;
