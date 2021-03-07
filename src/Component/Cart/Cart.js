import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props);
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i];
        totalSalary = totalSalary + salary.value;
    }

    return (
        <div className="cart">
            <h4 className="text-primary">Players Added:{cart.length}</h4>
            <h1>Total Salary:{totalSalary}</h1>
            <br />
            <div >
                <ul className="cart-info">
                    {
                        cart.map(m => <li>
                            <img src={m.Image}></img>
                            <br />
                            NAME: {m.name},
                            <br />
                            Salary: {m.value} ,
                            <br />
                            Team: {m.Team}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;
