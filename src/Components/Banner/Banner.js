import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Banner.css';

// Create an instance of axios with base URL

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(()=>{

  },[])

  return (
    <div className='banner'>
      <div className='content'>
        {movie && (
          <>
            <h1 className='title'>Movie : {movie.title}</h1>
            <div className='banner-button'>
              <button className='button'>Play</button>
              <button className='button'>My List</button>
            </div>
          </>
        )}
        <h1 className='desc'>qwertyuioplkjhgfdsaxzcvbnm mnjnjdfnjnejfergjer. jnjejekekkenkkrmbkrm</h1>
      </div>
      <div className='fade'></div>
    </div>
  );
}

export default Banner;
