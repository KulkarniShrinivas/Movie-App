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
import pi from "../../assets/pi.png"

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


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

    return (
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
          <ContentWrapper>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            
            <ul className="menuItems">
              <li className="menuItem">Movies</li>
              <li className="menuItem">TV Shows</li>
              <li className="menuItem">
                <HiOutlineSearch />
              </li>
            </ul>

            <div className="mobileMenuItems">
              <HiOutlineSearch />
              {mobileMenu ? (
                //if its true we need to show close button
                  <VscChromeClose onClick={() => setMobileMenu(false)} />
              ) : (
                //if its false we need to display handburgermenuitem
                <SlMenu  onClick={openMobileMenu}/>
              )}
              
              
            </div>
          </ContentWrapper>
        </header>
    );
};

export default Header;