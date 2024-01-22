

import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

const Carousel = ({data, loading }) => {
    //loading state is used for skelaton while loading
    //will get referance of that div carouselContainer
    const carouselContainer = useRef();
    const {url} = useSelector((state) => state.home);
    const navigate = useNavigate();


  return (
    <div className="carousel">
        <ContentWrapper>
           <BsFillArrowLeftCircleFill
                className="carouselLeft arrow"
                onClick={() => NavigationPreloadManager("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={() => NavigationPreloadManager("right")}
            /> 
        </ContentWrapper>
      
    </div>
  )
}

export default Carousel
