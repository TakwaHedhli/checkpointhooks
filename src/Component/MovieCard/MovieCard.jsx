import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <div className='my-card'>
        <img  src={movie.url}/>
        <h1> {movie.title}  </h1> 
        <h6>{movie.descrption}</h6>
        <h4>{"⭐".repeat(movie.rating)}</h4>

    </div>
  )
}

export default MovieCard