import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const handleChange = (data) => {
    console.log(data)
}
const Order = ({ order }) => {
    return (
        <tr>
            <td>{order.Name}</td>
            <td>{order.Email}</td>
            <td>{order.phone}</td>
            <td>{order.CourseName}</td>
            <td>${order.price}</td>
            <td><Select onChange={(e) => handleChange(order.name)} options={options} /></td>
        </tr>
    );
};

export default Order;