import React from 'react'

const Order = ({ order, index }) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{order.Name}</td>
            <td>{order.Email}</td>
            <td>{order.phone}</td>
            <td>{order.CourseName}</td>
            <td>${order.price}</td>
        </tr>
    );
};

export default Order;