import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

export default function MovieDetails() {
    const { animeId } = useParams();
    const [anime, setAnime] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://ghibliapi.vercel.app/films/${animeId}`);
                setAnime(response.data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, [animeId]);

    return (
        <section className="after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-b after:from-transparent  after:to-gray-800 md:h-screen w-full px-[4%] flex flex-col justify-end pb-10 !bg-cover !bg-no-repeat relative gap-5" style={{ backgroundImage: `url(${anime.movie_banner})` }}>
            {/* <div className="bg absolute w-[100%] h-[100%] bottom-0 left-0 bg-gradient-to-t from-[#08b0f0] to-transparent z-20"></div> */}
            <h1 className="text-7xl text-white z-50 w-full pb-5 border-b-2">{Object.keys(anime).length === 0 ? 'Loading...': anime.title}</h1>
            <p className="text-white z-50 -mt-2 ot">{Object.keys(anime).length === 0 ? 'Loading...': anime.original_title}</p>
            <div className="md:flex z-50 items-">
                <div className="img_cont min-w-full md:min-w-[18rem] min-h-[400px] rounded-xl">
                    <img src={anime.image} alt={anime.title} className="z-50 w-full md:w-72 h-auto rounded-xl"/>
                    {/* <img src={anime.image} alt={anime.title} className="z-50 w-full md:w-72 h-auto rounded-xl"/> */}
                </div>
                <div>
                    <div className="md:flex justify-start w-full gap-3 py-3 md:py-0 md:px-3">
                        <div className="grid">
                            <p className="text-white py-1 px-4 text-3xl d rounded-full border">{Object.keys(anime).length === 0 ? 'Loading...': anime.director}</p>
                            <small className="px-4 text-xl text-white">Director</small>
                        </div>
                        <div className="grid">
                            <p className="text-white py-1 px-4 text-3xl p rounded-full border">{Object.keys(anime).length === 0 ? 'Loading...': anime.producer}</p>
                            <small className="px-4 text-xl text-white">Producer</small>
                        </div>
                        <div className="grid">
                            <p className="text-white py-1 px-4 text-3xl rd rounded-full border" style={{ mixBlendMode: 'difference' }}>{Object.keys(anime).length === 0 ? 'Loading...': anime.release_date}</p>
                            <small className="px-4 text-xl text-white">Release Date</small>
                        </div>
                    </div>
                    <div className="md:px-3 md:pt-8">
                        <p className="md:px-4 text-3xl md:text-xl text-white mb-4">Story</p>
                        <p className="text-white text-xl ds">{Object.keys(anime).length === 0 ? 'Loading...': anime.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}