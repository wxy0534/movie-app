import React, { useEffect, useState } from 'react';
// import './App.css';
import Movie from './components/Movie';

const TRENDING_API = 'https://api.themoviedb.org/3/trending/all/day?api_key=8a8db148d0ce9524c40e6875843a06e1'
const IMG_API = 'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8a8db148d0ce9524c40e6875843a06e1&language=en-US'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8a8db148d0ce9524c40e6875843a06e1&query='


function App() {
  const [ movies, setMovies ] = useState([]);
  
  useEffect(() => {
    fetch(TRENDING_API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        })
  }, []);

  return (
    <div>
      {movies.map((movie) => <Movie key={movie.id} {...movie} />)}       
        
    </div>
  );      
   
}

export default App;
