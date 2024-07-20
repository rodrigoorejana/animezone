import { register } from 'swiper/element/bundle'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { SwiperSlide, Swiper } from 'swiper/react'

// Definição dos tipos
interface AnimeAttributes {
    canonicalTitle: string;
    coverImage: {
        small: string;
    };
}

interface AnimeData {
    id: string;
    attributes: AnimeAttributes;
}

const API = 'https://kitsu.io/api/edge'

register();

const Slider = () => {
    const [info, setInfo] = useState<AnimeData[]>([])

    useEffect(() => {
        fetch(`${API}/anime?filter[categories]=action&page[limit]=10&sort=-userCount`)
            .then((res) => res.json())
            .then((res) => {
                const filteredData = res.data.slice(5, 8); // Pega resultados 6, 7 e 8
                setInfo(filteredData);
                console.log(filteredData);
            })
    }, [])

    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }} // Muda para o próximo slide a cada 5 segundos
        >
            {info.length > 0 && info.map((anime) => (
                <SwiperSlide key={anime.id}>
                    <img src={anime.attributes.coverImage.small} alt={anime.attributes.canonicalTitle} className='slide-item'/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
