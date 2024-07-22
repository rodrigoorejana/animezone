import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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

interface ApiResponse {
  data: AnimeData[];
}

const API = 'https://kitsu.io/api/edge';

interface WatchNowProps {
  onAddToQueue: (anime: AnimeData) => void;
}

const WatchNow: React.FC<WatchNowProps> = ({ onAddToQueue }) => {
  const [anime, setAnime] = useState<AnimeData | null>(null);

  useEffect(() => {
    fetch(`${API}/anime?filter[text]=naruto`)
      .then((response) => response.json())
      .then((response: ApiResponse) => {
        if (response.data.length > 0) {
          setAnime(response.data[0]);
        }
      });
  }, []);

  return (
    <div className="container">
      <h1>ASSISTA AGORA</h1>
      <div className="container container-Naruto p-2 text-white">
        {anime ? (
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>{anime.attributes.canonicalTitle}</h1>
              <p>Momentos antes do nascimento de Naruto Uzumaki, um enorme demônio conhecido como Kyuubi, a Raposa de Nove Caudas, atacou Konohagakure, a Vila Oculta da Folha, e causou estragos. Para pôr fim à violência da Kyuubi, o líder da aldeia, o Quarto Hokage, sacrificou sua vida e selou a fera monstruosa dentro do recém-nascido Naruto. Agora, Naruto é um ninja hiperativo e teimoso que ainda vive em Konohagakure. Evitado por causa da Kyuubi dentro dele, Naruto luta para encontrar seu lugar na vila, enquanto seu desejo ardente de se tornar o Hokage de Konohagakure o leva não apenas a novos grandes amigos, mas também a alguns inimigos mortais. </p>
              <button type="button" className="btn btn-warning">COMEÇAR A ASSISTIR</button>
              <button
                type="button"
                className="btn btn-outline-warning ms-3"
                onClick={() => onAddToQueue(anime)}
              >
                ADICIONAR A FILA
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WatchNow;
