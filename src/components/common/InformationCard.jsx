import { Edit } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React from 'react';
import Data from './Data';
import NameCard from './NameCard';
import "./css/informationCard.css"

function InformationCard(props) {

    return (

        <div className="card-container">
            <NameCard 
                name={props.name} 
                phoneNo={props.phoneNo} 
                emailId={props.email} />

            <div className="card-body">
                {
                    props.dataValues.map(
                        dataValue => <Data label={dataValue.label} value={dataValue.value}/>
                    )
                }
                
                {
                    props.edit
                    && <div className="fab-edit">
                        <Fab iconClassName="fab-edit-icon" color="primary" onClick={props.editHandler}>
                            <Edit />
                        </Fab>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default InformationCard;
