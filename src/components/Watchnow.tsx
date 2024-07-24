import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


interface AnimeAttributes {
    canonicalTitle: string;
    posterImage: {
        small: string;
    };
    synopsis: string;
    youtubeVideoId: string;
}

interface AnimeData {
    id: string;
    attributes: AnimeAttributes;
}

interface ApiResponse {
    data: AnimeData[];
}

const API = 'https://kitsu.io/api/edge';

interface WatchnowProps {
    onAddToQueue: (anime: AnimeData) => void;
}

const Watchnow: React.FC<WatchnowProps> = ({ onAddToQueue }) => {
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
            
            <div className="container-naruto p-2">
            
                {anime ? (
                    <div className="row justify-content-center bg-black p-4 text-center">
                        <h2>Assista Agora</h2>
                        <div className="col-md-3 mb-2 mb-md-0 bg-white rounded-left">
                            
                            <img 
                                src={anime.attributes.posterImage.small} 
                                alt={anime.attributes.canonicalTitle} 
                                className="img-fluid" 
                                style={{ maxHeight: '600px', objectFit: 'cover' }} 
                            />
                        </div>
                        <div className="col-md-5 bg-white text-start text-black rounded-right">
                            <h1 className="text-decoration-partial">{anime.attributes.canonicalTitle}</h1>
                            <p>Momentos antes do nascimento de Naruto Uzumaki, um enorme demônio conhecido como Kyuubi, a Raposa de Nove Caudas, atacou Konohagakure...</p>
                            <div className="mb-3 ">
                                
                            </div>
                            <button type="button" className="btn btn-warning m-2">COMEÇAR A ASSISTIR</button>
                            <button 
                                type="button" 
                                className="btn btn-outline-dark m-2" 
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

export default Watchnow;
