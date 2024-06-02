import React from 'react'
import { Link } from 'react-router-dom';

export default function Movie(props) {
    const { anime } = props;
    return (
        <Link to={`/movie/${anime.id}`} className="after:absolute after:w-full after:h-full after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-gray-900 after:via-transparent after:rounded-xl relative rounded-xl aspect-[0.7] sm:aspect-[0.6] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-700 p-4 cursor-pointer">
            <img src={anime.image} alt="" className="rounded-xl absolute h-full object-cover w-full left-0 top-0" />
            <h2 className="z-50 text-white absolute object-cover w-full left-0 bottom-0 text-xl p-4">{anime.title}</h2>
        </Link>
    )
}
