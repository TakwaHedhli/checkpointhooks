
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MoviesData from '../MoviesData/Data';
import '../MovieDeatils/MovieDetails.css'

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const params = useParams()
    useEffect (()=>{
        setMovie(MoviesData.find(movie=>movie.id === params.id))
    },[params.id])
  return (
    <div className='movie-det'>
        <h1>Movie Details</h1>
        <h2>{movie.title}</h2>
        <iframe width="700"
         height="400" 
         src={movie.trailer} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    </div>
  )
}
export default MovieDetails