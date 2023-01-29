import React from "react";
import {  NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";




const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    
    <div className="myheader">
            
      <h2 className="this"> هذا الاسلام
          <span>الموقع الرسمى لفضيلة الشيخ محمد ابن ابراهيم التويجرى</span> </h2>
    
      <header className="hide-when-mobile  ">
          <NavLink className="logo" to="/">
       الرئيسية<span><i className="fa-regular fa-eye"></i></span>

            </NavLink>
        
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>
          <li className="main-list">
            <NavLink className="main-link" to="/First">
            دار القرأن الكريم  
            </NavLink>

          </li>
           <li className="main-list">
            <NavLink className="main-link" to="/Second">
            اسئلة واحكام
            </NavLink>

          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/Third">
              الدروس العلمية
            </NavLink>

          </li>
           <li className="main-list">
            <NavLink className="main-link" to="/Forth">
              مخزن الجواهر
            </NavLink>
        
          </li>


        
      </header>
  
    </div>
  );
};

export default Header;
