import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const API = "https://kitsu.io/api/edge";

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

const Recommendation = () => {
    const [info, setInfo] = useState<AnimeData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API}/anime?include=categories,mediaRelationships.destination`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res) => {
                const data = res.data;
                console.log("Número total de itens:", data.length);
                setInfo(data);
            })
            .catch((error) => {
                setError(error.message);
                console.error("Error fetching data:", error);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Chunk the data into groups of 4
    const chunkArray = (arr: AnimeData[], size: number) => {
        const result: AnimeData[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const chunks = chunkArray(info, 5);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Recomendações para você</h1>
            <Carousel>
                {chunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex">
                            {chunk.map((anime) => (
                                <div key={anime.id} className="p-2" style={{ flex: "1 0 25%", maxWidth: "25%" }}>
                                    <div className="card h-100">
                                        <img
                                            src={anime.attributes.posterImage?.small}
                                            alt={anime.attributes.canonicalTitle}
                                            className="card-img-top"
                                            style={{ height: "300px", objectFit: "cover" }}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-truncate" style={{ maxWidth: "100%", overflow: "hidden" }}>
                                                {anime.attributes.canonicalTitle}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Recommendation;
