import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

// Componente personalizado para seta anterior
const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};

// Componente personalizado para seta próxima
const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const Recommendation = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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

    return (
        <>
            
            <div className="container mx-auto px-4">
            <h1>Recomendações para você</h1>
                <Slider {...settings}>
                    {info.map((anime) => (
                        <div key={anime.id} className="p-2">
                            <div className="h-[450px] rounded-xl overflow-hidden bg-white shadow-md">
                                <div className="h-56 flex items-center justify-center bg-gray-100">
                                    {anime.attributes.posterImage?.small ? (
                                        <img
                                            src={anime.attributes.posterImage.small}
                                            alt={anime.attributes.canonicalTitle}
                                            className="object-cover h-full w-full"
                                        />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>
                                <div className="p-4 text-center">
                                    <span className="font-semibold">{anime.attributes.canonicalTitle}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Recommendation;
