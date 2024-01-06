import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import request from "./Request";
// import request from "./Request";

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
   
    fetchData();
  }, []);

  async function fetchData () {
try{
    const res = await axios.get(request.fetchNetlixOriginals);
    const data =  res.data.results[
      Math.floor(Math.random() * res.data.results.length - 1)
    ]
    setMovie(data);
    
    console.log(data);

}catch (e) {
  console.log(e?.message)
}
}



  function truncate(string,n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }



  return  <header className='banner'
   style={{
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  }}>

  <div className="banner_conteins">
    <h1 className='banner_title'>
      {movie?.title || movie?.name || movie?.original_name}
      </h1>
    <div className='banner_buttons'>
      <button className='banner_button'>Play</button>
      <button className='banner_button'>My List</button>
    </div>
    <h1 className='banner_description'>
    {truncate(movie?.overview, 150)}
       </h1>
  </div>
  
  <div className="fade--Button" />
  </header>;

  
}

export default Banner
