import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './Rowpost.css';
import p1 from '../../Database/youtube/youtube.json'; // Assuming this contains trailer data
import { imageUrl } from '../../constants/constants';

function RowPost({ title, data, isSmall }) {
  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState('');

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleTrailer = (id) => {
    console.log('Clicked Movie ID:', id);
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      const trailer = p1.results.find((result) => result.type === "Trailer" && result.site === "YouTube"); // Find trailer in the dataset
      if (trailer) {
        console.log('Found Trailer:', trailer);
        setVideoKey(trailer.key); // Set the YouTube video key
      } else {
        console.log('Trailer not found for movie ID:', id);
      }
    } else {
      console.log('Movie not found for ID:', id);
    }
  };

  const opts = {
    height: '390',
    width: '100%', // Set width to 100%
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='posters'>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <img
              onClick={() => handleTrailer(movie.id)}
              key={movie.id}
              className={isSmall ? 'smallposter' : 'poster'}
              src={`${imageUrl + movie.backdrop_path}`}
              alt={movie.title || movie.name}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {videoKey && (
        <div className='trailer-container'>
          <YouTube videoId={videoKey} opts={opts} />
        </div>
      )} {/* Render YouTube only if videoKey is set */}
    </div>
  );
}

export default RowPost;
