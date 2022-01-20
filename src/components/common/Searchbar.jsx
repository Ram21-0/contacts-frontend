import React, { useState } from 'react';
import { matchSorter } from 'match-sorter';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'
import InputAdornment from '@mui/material/InputAdornment';
import "./css/searchbar.css"


import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'
import ContactListItem from '../contacts/ContactListItem';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@mui/icons-material';

function Searchbar(props) {

    // const { register, watch } = useForm()

    const [query, setQuery] = useState("");
    
    const result = Object.values(props.contacts.contacts)

    function search(searchQuery) {
        searchQuery = searchQuery.trim()
        if(!searchQuery || searchQuery === "") {
            props.setResult(result)
            return
        }

        searchQuery = searchQuery.toLowerCase()
        props.setResult(
            result.filter(contact => contact.name.toLowerCase().startsWith(searchQuery))
        )
    }

    // const filterOptions = createFilterOptions({
    //     matchFrom: 'start',
    //     stringify: (option) => option.name,
    //   });

    // const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

    return (

        <div>
            
            <div className="search">
                <TextField className="search-bar-input"
                    value={query}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setQuery(e.target.value)
                        search(e.target.value)
                    }}
                    InputProps={{
                        startAdornment: 
                            <InputAdornment position="start">
                                <SearchOutlined/>
                            </InputAdornment>
                    }}
                />
            </div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllContacts: () => dispatch(fetchContacts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Searchbar)
