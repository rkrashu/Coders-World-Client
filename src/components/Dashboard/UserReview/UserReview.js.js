import React from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import ReviewForm from './ReviewForm/ReviewForm';

const UserReview = () => {
    return (
        <div>
        <Navbar></Navbar>
    <div className = 'row mb-3'>
        <div className='col-md-2'>
        <DashboardSidebar></DashboardSidebar>
        </div>
        <div className='col-md-10'>
            <ReviewForm></ReviewForm>
        </div>
    </div>
    </div>
    );
};

export default UserReview;