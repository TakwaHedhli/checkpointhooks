import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({data, title, rate}) => {
    console.log(data)
  return (
    <div className='my-list'>
{

    data
    .filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()) && (movie.rating >= rate))
    .map((movie, index) =><MovieCard movie={movie} key={index}/>) 
}
    </div>
  )
}

export default MovieList;