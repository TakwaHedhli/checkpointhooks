
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , { useState } from "react";
import MyNav from './Component/MyNav/MyNav';
import MoviesData from './Component/MoviesData/Data';
import MovieList from './Component/MoviesList/MovieList';
import AddMovie from './Component/AddCard/AddMovie';
import {Routes , Route } from 'react-router-dom';
import MovieDetails from './Component/MovieDeatils/MovieDetails';

function App() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [data, setData]= useState(MoviesData);
  
  const handleTitle = (input) =>{
    setTitle(input)
  }
  const handleRate = (input) =>{


    setRate(input)
  }
  const handleData = (input) =>{
    setData([...data,input])
  }  
  return (
    <div className="App">
     
      <MyNav  handleTitle={handleTitle} handleRate={handleRate}/>
      <AddMovie handleData={handleData}/>
      <Routes>
        <Route path="/" 
        element={<MovieList data={data} title={title} rate={rate}/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
