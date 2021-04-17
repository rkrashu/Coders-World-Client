import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import BuyForm from './BuyForm/BuyForm';
import Navbar from '../../Home/Header/Navbar/Navbar'
import { useParams } from 'react-router';

const BuyCourse = () => {
    const [courseDetails, setCourseDetails] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://tranquil-tor-13742.herokuapp.com/course/${id}`)
        .then(res=> res.json())
        .then(data => setCourseDetails(data[0]))
    },[id])
    return (
        <div>
            <Navbar></Navbar>
        <div className = 'row'>
            <div className='col-md-2'>
            <DashboardSidebar></DashboardSidebar>
            </div>
            <div className='col-md-10'>
                <BuyForm courseDetails={courseDetails}></BuyForm>
            </div>
        </div>
        </div>
    );
};

export default BuyCourse;