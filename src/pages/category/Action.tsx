import { useEffect, useState } from "react";
import Header from '../../components/Header';
import Pagination from "../../components/Pagination";

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

const Action = () => {
    const [info, setInfo] = useState<AnimeData[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        fetch(`${api}/anime?filter[categories]=action&page[limit]=${limitPage}&page[offset]=${offset}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res: ApiResponse) => {
                setInfo(res.data);
                setTotal(res.meta.count); // Atualiza o total de itens
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [offset]); // Atualiza quando o offset mudar

    return (
        <div>
            <Header />
            <div className="container">
                <ul className="list-group anime-list text-center items-center">
                    {info.map((anime) => (
                        <li key={anime.id} className="list-group-item d-flex flex-column align-items-center m-1">
                            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} className="img-fluid m-1" />
                            {anime.attributes.canonicalTitle}
                        </li>
                    ))}
                </ul>
                {total > 0 && (
                    <Pagination
                        limit={limitPage}
                        total={total}
                        offset={offset}
                        setOffset={setOffset} // Passa a função para atualizar o offset
                    />
                    
                )}
            </div>
        </div>
    );
};

export default Action;
