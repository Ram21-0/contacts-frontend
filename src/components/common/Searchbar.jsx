import React from 'react';
import { matchSorter } from 'match-sorter';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Searchbar(props) {



    const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

    return (

        <div>
            <Autocomplete
                id="search"
                options={[]} 
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                freeSolo
                renderInput={(params) => <TextField {...params}/>}
                />
        </div>
    )
}

export default Searchbar;
