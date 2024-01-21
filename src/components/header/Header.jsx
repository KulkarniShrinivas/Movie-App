import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
//mobileitem handburger menuitem
import { SlMenu } from "react-icons/sl";
//closeButton
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import pi from "../../assets/pi.png";


const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const controlNavbar = () => {
      console.log(window.scrollY);
      if(window.scrollY > 200){
        if(window.scrollY >lastScrollY && !mobileMenu){
          setShow("hide");
        } else{
          setShow("show");
        }
        
      } else{
        setShow("top");
      }
      setLastScrollY(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll",controlNavbar);
      }
      //scrolly will display in console how many times you have scrolled 
    }, [lastScrollY])


    const searchQueryHandler = (event) => {
      if (event.key === "Enter" && query.length > 0) {
          navigate(`/search/${query}`);
      }
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
  };

    //to handle mobile menu we need to create two method

    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)


    }

    const openMobileMenu = () => {
      //whenever mobile menu opens we need to make true for setMobileMenu
      setMobileMenu(true)
      setShowSearch(false)


    }

    //Including Navigation maethod so will create method

    const navigationHandler = (type) => {
      if(type === "movie") {
          navigate("/explore/movie");
      } else{
        navigate("/explore/tv");

      }
      //so after opening this we need to close the menu  so make setmobilemenu as false 
      setMobileMenu(false);
    };


    return (
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            
            <ul className="menuItems">
              <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
              <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
              <li className="menuItem">
              <HiOutlineSearch  onClick={openSearch}/>
              </li>
            </ul>

            <div className="mobileMenuItems">
              <HiOutlineSearch  onClick={openSearch}/>
              {mobileMenu ? (
                //if its true we need to show close button
                  <VscChromeClose onClick={() => setMobileMenu(false)} />
              ) : (
                //if its false we need to display handburgermenuitem
                <SlMenu  onClick={openMobileMenu}/>
              )}
              
              
            </div>
          </ContentWrapper>

         { /*searchBar*/}

         
              {showSearch && (
                <div className="searchBar">
                <ContentWrapper>
                  <div className="searchInput">
             
                  <input
                      type="text"
                      placeholder="Search for a movie or tv show...."
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyUp={searchQueryHandler}
                  />
                  <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
           </ContentWrapper>
         </div>
       )}
              



        </header>
    );
};

export default Header;