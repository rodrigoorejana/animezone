import Image from 'next/image';

interface AnimeAttributes {
  canonicalTitle: string;
  posterImage: {
    small: string;
  };
}

interface AnimeData {
  id: string;
  attributes: AnimeAttributes;
}

interface QueueListProps {
  queue: AnimeData[];
  onRemoveFromQueue: (animeId: string) => void;
}

const QueueList: React.FC<QueueListProps> = ({ queue, onRemoveFromQueue }) => {
  return (
    <div className="container">
      <h1>Minha Fila</h1>
      <div className='container container-queue'>
        {queue.length > 0 ? (
          <ul>
            {queue.map((anime) => (
              <li key={anime.id}>
                <Image 
                  src={anime.attributes.posterImage.small} 
                  alt={anime.attributes.canonicalTitle} 
                  width={150} // Defina a largura desejada
                  height={225} // Defina a altura desejada
                  className="anime-poster" // Adiciona uma classe CSS para estilização adicional
                />
                <h2>{anime.attributes.canonicalTitle}</h2>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onRemoveFromQueue(anime.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum anime na fila.</p>
        )}
      </div>
    </div>
  );
};

export default QueueList;
