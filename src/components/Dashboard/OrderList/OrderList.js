import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import Order from './Order/Order';

const OrderList = () => {
    const [orderData, setOrderData] = useState([])
    useEffect(()=>{
        fetch('https://tranquil-tor-13742.herokuapp.com/orderList', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then (data => setOrderData(data))
    }, [])

    return (
        <div>
        <Navbar></Navbar>
    <div className = 'row'>
        <div className='col-md-2'>
        <DashboardSidebar></DashboardSidebar>
        </div>
        <div className='col-md-10'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Course Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {
      orderData.map((order, index) => <Order order={order} index={index}></Order>)
  }
  </tbody>
</table>
        </div>
    </div>
    </div>
    );
};

export default OrderList;