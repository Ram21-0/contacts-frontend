import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./css/searchbar.css"

import { connect } from "react-redux"
import { SearchOutlined } from '@mui/icons-material';

function Searchbar(props) {

    const [query, setQuery] = useState("");

    function implementSearch(searchQuery) {
        searchQuery = searchQuery.trim().toLowerCase()
        props.setSearchQuery(searchQuery)
    }

    return (
        <div className="search">
            <TextField className="search-bar-input"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                    implementSearch(e.target.value)
                }}
                InputProps={{
                    startAdornment: 
                        <InputAdornment position="start">
                            <SearchOutlined/>
                        </InputAdornment>
                }}
            />
        </div>
    )
}

export default Searchbar
