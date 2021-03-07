import React, { useState } from 'react';
import Player from './Fakedata';
import './Details/Details.css'
import Person from './Person/Person';
import Cart from './Cart/Cart';

const Details = () => {
    const first10 = Player.slice(0, 10);
    const [persons, setPerson] = useState(first10);

    const [cart, setCart] = useState([]);
    const [team,setTeam] = useState([]);

    const handleAddPerson = (person) => {
        const newCart = [...cart, person];
        setCart(newCart);
    }

    const addTeam = (name) => {
        setTeam([...team, name]);
    }

    return (
        <div className="details-container">
            <div className="player-details">
                <ul></ul>
                {
                    persons.map(pd => <Person
                        handleAddPerson={handleAddPerson}
                        person={pd}>
                    </Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Details;