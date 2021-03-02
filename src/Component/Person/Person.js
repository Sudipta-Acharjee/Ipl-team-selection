import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    const { Image, name, Team, value } = props.person;
    return (
        <div className="person">
            <div>
                <img src={Image} alt=""></img>
            </div>
            <div className="details">
                <h2 className="person-name">{name}</h2>
                <br />
                <h4>Team : {Team}</h4>
                <h4>Salary : {value}</h4>
                <button 
                className="main-button"
                onClick={()=>props.handleAddPerson(props.person)}

                ><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>

        </div>
    );
};

export default Person;