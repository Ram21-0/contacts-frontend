import React from 'react';
import "./css/nameCard.css"
import CustomAvatar from './CustomAvatar';
import Email from './Email';
import Phone from './Phone';
import PropTypes from 'prop-types'

function NameCard(props) {
    return (
        <div className='card-name-container'>

            <div className="name-card-avatar">
                <CustomAvatar text={props.name} size={120} square/>
            </div>

            <div className="name-card-body">
                <div className="name">
                    {props.name}
                </div>

                <div className="name-card-details">
                    {
                        props.phoneNo 
                        && <div className="card-details">
                            <Phone phoneNo={props.phoneNo}/>
                        </div>
                    }

                    {
                        props.emailId
                        && <div className="card-details">
                            <Email emailId={props.emailId}/>
                        </div>
                    }
                </div>
                
            </div>
            
        </div>
    )
}

NameCard.propTypes = {
    name: PropTypes.string,
    phoneNo: PropTypes.string,
    emailId: PropTypes.string
}

export default NameCard;
