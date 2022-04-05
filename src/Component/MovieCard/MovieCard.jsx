import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'
const MovieCard = ({movie}) => {
    console.log(movie)
  return (
    <div className='my-card'>
      <Link to={`/movie/${movie.id}`}>
        <img  src={movie.url} />
        </Link>
        <h1> {movie.title}  </h1> 
        <h6>{movie.descrption}</h6>
        <h4>{"⭐".repeat(movie.rating)}</h4>

    </div>
  )
}
export default MovieCard