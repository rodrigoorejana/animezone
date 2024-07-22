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

interface YoumightliketooProps {
    onAddToQueue: (anime: AnimeData) => void;
}

const Youmightliketoo: React.FC<YoumightliketooProps> = ({ onAddToQueue }) => {
    const [anime, setAnime] = useState<AnimeData | null>(null);

    useEffect(() => {
        fetch(`${API}/anime?filter[text]=one-piece`)
            .then((response) => response.json())
            .then((response: ApiResponse) => {
                if (response.data.length > 0) {
                    setAnime(response.data[0]);
                }
            });
    }, []);

    return (
        <div className="container">
            <h1>VOCÊ PODE GOSTAR</h1>
            <div className="container container-onepiece p-2 text-white">
                {anime ? (
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>{anime.attributes.canonicalTitle}</h1>
                            <p>Gol D. Roger era conhecido como o "Rei dos Piratas", sendo o mais forte e infame ter navegado na Grande Linha. A captura e morte de Rogério pelo Governo Mundial trouxe uma mudança em todo o mundo. Suas últimas palavras antes de sua morte revelaram a existência do maior tesouro do mundo, One Piece</p>
                            <button type="button" className="btn btn-warning">COMEÇAR A ASSISTIR</button>
                            <button
                                type="button"
                                className="btn btn-outline-warning ms-3"
                                onClick={() => anime && onAddToQueue(anime)}
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

export default Youmightliketoo;
