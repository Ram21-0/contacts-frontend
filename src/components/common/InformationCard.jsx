import { Edit } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';
import Data from './Data';
import NameCard from './NameCard';
import "./css/informationCard.css"

function InformationCard(props) {

    let dataKey = 0

    return (

        <div className="card-container">
            <NameCard 
                name={props.name} 
                phoneNo={props.phoneNo} 
                emailId={props.email} />

            <div className="card-body">
                {
                    props.dataValues.map(
                        dataValue => <Data key={++dataKey} label={dataValue.label} value={dataValue.value}/>
                    )
                }
                
            </div>
                
            {
                props.edit
                && <div className="fab-edit">
                    <Tooltip title="Edit">
                        <Fab color="primary" onClick={props.editHandler}>
                            <Edit />
                        </Fab>
                    </Tooltip>
                </div>
            }
            
        </div>
    )
}

export default InformationCard;
