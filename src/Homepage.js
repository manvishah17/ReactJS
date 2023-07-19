import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './App.css';

function Homepage() {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then((res) => {
        // Assuming the response data is an array of movies
        setMydata(res.data.Search);
      })
  }, []);

  return (
    <>
    <div class="row"> 
  
      <div className="App">
        <h1>Movie Details</h1>
        {
          mydata.map((movie) => (
            <div class="column">
            <div className="card2" key={movie.imdbID} style={{display:"center"}} >
            
    
              <Link to={`/moviedetails/${movie.imdbID}`}>
                <h1>{movie.Title}</h1>
                <div><img src={movie.Poster} alt={movie.Title} /></div>
              </Link>
            </div></div>
          ))
        }
      </div></div>
    </>
  );
}

export default Homepage;
