import React from "react";
import "./SearchBar.css"

const SearchBar = ({ onSearchBarChange }) => {
    return (
        <div className="container searchbar-container">
            <form onSubmit={e => e.preventDefault()}>
                <input onChange={e => onSearchBarChange(e.target.value)} type="search" placeholder="Enter a Youtube URL" />
                <i class="fa fa-search"></i>
            </form>
        </div>
    );
}

export default SearchBar;