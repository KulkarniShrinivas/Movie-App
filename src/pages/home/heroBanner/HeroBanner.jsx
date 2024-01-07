import React from 'react'
import "./style.scss";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from '../../../hooks/useFetch';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  //it will give correct urls in components
  const { url } = useSelector((state) => state.home);

  //changing ths upcoming movies background images by calling api from useFetch
  const { data, loading } = useFetch("/movie/upcoming");

  //whenever data changes 

  useEffect(() => {
    const bg =
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
}, [data]);

  //write method for search input
  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)


    }

  }

  return (
    <div className="heroBanner">

      <div className="backdrop-img">
        <Img  src={background} />
      </div>

      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">Millions of movies, TV shows and people to discover, Explore now.</span>
          <div className="searchInput">
            <input 
              type="text" 
              placeholder="Search for a movie or tv show..." 
              onChange={(e)=> setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
