import React from 'react';
import { matchSorter } from 'match-sorter';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'
import ContactListItem from '../contacts/ContactListItem';
import { useNavigate } from 'react-router-dom';

function Searchbar(props) {

    const { register, watch } = useForm()

    console.log(props)


    console.log(watch("search"));

    const navigate = useNavigate()
    

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.name,
      });

    // const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

    return (

        <div>
            <Autocomplete
                id="search"
                options={Object.values(props.contacts.contacts)} 
                // renderOption={}
                getOptionLabel={(option) => option.name}
                filterOptions={filterOptions}
                freeSolo
                renderInput={(params) => <TextField {...params}/>}
                {...register("search")}
                />
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
