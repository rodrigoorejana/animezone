import { GetServerSideProps } from 'next';
import { AnimeData, AnimeAttributes } from '../../components/Types';
import React, { useState } from 'react';
import Header from '@/components/Header';

const API = 'https://kitsu.io/api/edge';

interface AnimeDetailProps {
  anime: AnimeData | null;
}

const AnimeDetail: React.FC<AnimeDetailProps> = ({ anime }) => {
  const [queue, setQueue] = useState<AnimeData[]>([]);

  const handleAddToQueue = () => {
    if (anime) {
      // Check if anime is already in the queue
      const storedQueue = JSON.parse(localStorage.getItem('animeQueue') || '[]');
      const isDuplicate = storedQueue.some((item: AnimeData) => item.id === anime.id);

      if (!isDuplicate) {
        const updatedQueue = [...storedQueue, anime];
        setQueue(updatedQueue);
        localStorage.setItem('animeQueue', JSON.stringify(updatedQueue));
        alert('Adicionado à fila!');
      } else {
        alert('Anime já está na fila!');
      }
    }
  };

  if (!anime) {
    return <p>Anime not found</p>;
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row bg-black p-4 text-center">
          <div className="col-md-3 mb-2 mb-md-0">
            <img
              src={anime.attributes.posterImage.small}
              alt={anime.attributes.canonicalTitle}
              className="img-fluid img-card"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className="col text-start text-white ">
            <h1 className="text-decoration-partial">{anime.attributes.canonicalTitle}</h1>
            <p>{anime.attributes.synopsis}</p>
            <p>Age Rating: {anime.attributes.ageRatingGuide}</p>
            <p>Episode Count: {anime.attributes.episodeCount}</p>
            <button
              type="button"
              className="btn btn-warning m-2"
              onClick={handleAddToQueue}
            >
              Add To Queue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const response = await fetch(`${API}/anime/${id}`);
    const data = await response.json();

    if (data && data.data) {
      return {
        props: {
          anime: data.data,
        },
      };
    } else {
      return {
        props: {
          anime: null,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return {
      props: {
        anime: null,
      },
    };
  }
};

export default AnimeDetail;
