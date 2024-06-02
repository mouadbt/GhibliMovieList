import './App.css'
import heroImg from '../public/imgs/Studio_Ghibli_logo.svg.png'
import Skeleton from './Skeleton'
import axios from 'axios'
import Movie from './Movie'
import { useState, useEffect } from 'react'

export default function List() {
    const [animes, setAnimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ghibliapi.vercel.app/films');
                setAnimes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <main className='min-h-screen bg-gradient-to-b from-white  to-[#00a5e4] pb-32 pt-12'>
            <img className='w-[30%] mx-auto' src={heroImg} alt="Studio Ghibli logo" />
            <h1 className="mt-4 text-6xl font-medium w-full text-center bg-gradient-to-r from-blue-600  to-[#00a5e4] inline-block text-transparent bg-clip-text">
                STUDIO GHIBLI COLLECTION
            </h1>
            <section className='grid sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full px-5 gap-5 mt-4'>
                {isLoading ? Array.from({ length: 12 }).map((_, index) => (
                    <Skeleton key={index} />
                )) : animes.map(anime => (
                    <Movie key={anime.id} anime={anime} />
                ))}
            </section>
        </main>
    )
}
