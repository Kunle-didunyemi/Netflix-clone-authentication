import "./Banner.css";
import Banners from "./avatarimage/netbanner.png";
import axios from './axios';
import requests from "./Request";
import React, { useEffect, useState } from "react";

const Banner = () => {

    const [movie, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
    fetchData();
    }, [])

    console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `this is the test description this is the test description this is the test description this is the test description this is the test description this is the test description this is the test description this is the test description loremuisouous97wsyrihwr08wur7wryiwlj-fwf8wsfkjwshjfoiws0f98sfu`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
