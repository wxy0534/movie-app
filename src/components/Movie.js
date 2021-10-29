import React from 'react'
const IMG_API = 'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=8a8db148d0ce9524c40e6875843a06e1&language=en-US'


const Movie = ({ title, poster_path, overview, release_date, vote_average }) => (
    <div className='movie'>
       <img src={IMG_API} alt={title} />
    </div>
);

export default Movie;

