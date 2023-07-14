import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../Redux/slices/searchSlice";
import "./SearchBar.css";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(search(searchQuery));
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
