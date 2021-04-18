import React from 'react';
import Navbar from '../Home/Header/Navbar/Navbar';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
    return (
        <div>
                <Navbar></Navbar>
                <div className='row'>
                    <div className='col-md-2'>
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                    <div style={{marginTop:'250px'}} className='col-md-10 text-center'>
                        <h2>Welcome to Dashboard</h2>
                    </div>

                </div>
        </div>
    );
};

export default Dashboard;