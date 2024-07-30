import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimeData, ApiResponse } from '../components/Types';

const API = 'https://kitsu.io/api/edge';

interface WatchnowProps {
    onAddToQueue: (anime: AnimeData) => void;
}

const Watchnow: React.FC<WatchnowProps> = ({ onAddToQueue }) => {
    const [anime, setAnime] = useState<AnimeData | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetch(`${API}/anime?filter[text]=naruto`)
            .then((response) => response.json())
            .then((response: ApiResponse) => {
                if (response.data.length > 0) {
                    setAnime(response.data[0]);
                }
            })
            .catch((error) => {
                console.error("Error fetching anime data:", error);
            });
    }, []);

    const handleClick = (id: string) => {
        router.push(`/anime/${id}`);
    };

    return (
        <div className="container">
            <div className="p-2">
                {anime ? (
                    <div className="row justify-content-center bg-black p-4 text-center">
                        <h2>WATCH NOW</h2>
                        <div className="col-md-3 mb-2 mb-md-0 rounded-left">
                            <img
                                src={anime.attributes.posterImage.small}
                                alt={anime.attributes.canonicalTitle}
                                className="img-fluid img-card"
                                style={{ maxHeight: '600px', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={() => handleClick(anime.id)}
                            />
                        </div>
                        <div className="col-md-5 text-start text-white rounded-right">
                            <h1 className="text-decoration-partial">{anime.attributes.canonicalTitle}</h1>
                            <p className="synopsis">{anime.attributes.synopsis}</p>
                            <button type="button" className="btn btn-warning m-2">WATCH NOW</button>
                            <button
                                type="button"
                                className="btn btn-outline-light m-2"
                                onClick={() => onAddToQueue(anime)}
                            >
                                ADD TO QUEUE
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
