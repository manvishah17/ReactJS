import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Moviedetails(){
    const { imdbID }=useParams();
    const [moviedetail,setMoviedetail]=useState(null);

    useEffect(()=>{
        axios
        .get(`https://www.omdbapi.com/?i=${ imdbID }&apikey=4a3b711b`)
        .then((response)=>
            setMoviedetail(response.data));
    },[imdbID]);
    if(!moviedetail){
        return <div>Please wait for a while </div>;
    }

    return(
        <div className="App">
            <h1>Movie Title :<br></br>{moviedetail.Title}</h1>
            <img src={moviedetail.Poster} alt={moviedetail.Title}/>
              <h2> <p>Type:{moviedetail.Type}</p></h2>
           <h2> <p>Year:{moviedetail.Year}<br></br></p></h2>
           
        
        </div>
    );

}
export default Moviedetails;
