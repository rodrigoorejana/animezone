
import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import Pagination from "../../components/Pagination";
import AddToQueueButton from '../../components/AddToQueueButton';

const api = "https://kitsu.io/api/edge";
const limitPage = 10;

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

interface ApiResponse {
    data: AnimeData[];
    meta: {
        count: number;
    };
}

const Action: React.FC = () => {
    const [info, setInfo] = useState<AnimeData[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [queue, setQueue] = useState<AnimeData[]>([]);

    useEffect(() => {
        // Recupera a lista do local storage, se existir, apenas no lado do cliente
        if (typeof window !== "undefined") {
            const savedQueue = localStorage.getItem("animeQueue");
            setQueue(savedQueue ? JSON.parse(savedQueue) : []);
        }
    }, []);

    useEffect(() => {
        fetch(`${api}/anime?filter[categories]=action&page[limit]=${limitPage}&page[offset]=${offset}`)
            .then((res) => res.json())
            .then((res: ApiResponse) => {
                setInfo(res.data);
                setTotal(res.meta.count);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [offset]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("animeQueue", JSON.stringify(queue));
        }
    }, [queue]);

    const handleAddToQueue = (anime: AnimeData) => {
        setQueue((prevQueue) => {
            const updatedQueue = [...prevQueue, anime];
            localStorage.setItem("animeQueue", JSON.stringify(updatedQueue));
            return updatedQueue;
        });
    };

    return (
        <div>
            <Header />
            <div className="container">
                <ul className="list-group anime-list text-center items-center">
                    {info.map((anime) => (
                        <li key={anime.id} className="list-group-item d-flex flex-column align-items-center m-1">
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} className="img-fluid m-1" />
                            {anime.attributes.canonicalTitle}
                            <AddToQueueButton
                                anime={anime}
                                onAddToQueue={handleAddToQueue}
                            />
                        </li>
                    ))}
                </ul>
                {total > 0 && (
                    <Pagination
                        limit={limitPage}
                        total={total}
                        offset={offset}
                        setOffset={setOffset}
                    />
                )}
            </div>
        </div>
    );
};

export default Action;
