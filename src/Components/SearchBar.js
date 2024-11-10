// SearchBar.js
import React from 'react';
import './SearchBar.css';
import  Search from "../assets/search.png";


function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <img src={Search} className="search-button"></img>
    </div>
  );
}

export default SearchBar;
