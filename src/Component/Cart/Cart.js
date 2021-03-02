import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(props);
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i];
        totalSalary = totalSalary + salary.value;
    }

    return (
        <div>
            <h4>Players Added:{cart.length}</h4>
            <h1>Total Salary:{totalSalary}</h1>
            <br />
            {}
            <div className="cart-info">
                <ul><div>
                    <li> Name:{
                        cart.map(player => player.name)
                    }</li>
                    <li>Salary:{cart.map(player => player.value)}</li>
                    <li>Team:{cart.map(player => player.Team)}</li>
                </div>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
