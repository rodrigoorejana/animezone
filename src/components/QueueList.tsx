import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="row">
        {queue.length > 0 ? (
          queue.map((anime) => (
            <div className="col-md-4 mb-3" key={anime.id}>
              <div className="card">
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">{anime.attributes.canonicalTitle}</h2>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onRemoveFromQueue(anime.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum anime na fila.</p>
        )}
      </div>
    </div>
  );
};

export default QueueList;
