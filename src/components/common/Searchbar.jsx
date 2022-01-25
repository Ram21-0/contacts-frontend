import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import "./css/searchbar.css"

import { SearchOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types'


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

Searchbar.propTypes = {
    setSearchQuery: PropTypes.func.isRequired
}

export default Searchbar
