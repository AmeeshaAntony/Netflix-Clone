import React, { useState, useEffect } from 'react';
import './Banner.css';
import p1 from '../../Database/trending/trending';
import { imageUrl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getTrendingData = async () => {
      try {
        // Accessing mock trending data
        const data = p1.results[0];
        setMovie(data);
      } catch (error) {
        console.error('Error fetching trending data:', error);
      }
    };

    getTrendingData();
  }, []);

  return (
    <div 
    style = {{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        {movie && (
          <>
            <h1 className='title'>{movie ? movie.original_title : ""}</h1>
            <div className='banner-button'>
              <button className='button'>Play</button>
              <button className='button'>My List</button>
              <h1 className='desc'>{movie.overview}</h1>
            </div>
          </>
        )}
      </div>
      <div className='fade'></div>
      
    </div>
  );
}

export default Banner;
