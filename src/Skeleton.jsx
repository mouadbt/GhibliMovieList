import React from 'react'

export default function Skeleton() {
    return (
        <div className="animate-pulse aspect-[0.7] w-full bg-blue-300 rounded-md flex flex-col justify-end p-4">
            <p className='w-full animate-pulse bg-blue-400 rounded-full h-6'></p>
            <p className='w-9/12 animate-pulse bg-blue-400 rounded-full h-4 mt-2'></p>
        </div>
    )
}
