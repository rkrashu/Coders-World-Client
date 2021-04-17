import React from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import AddCourseForm from './AddCourseForm/AddCourseForm';

const AddCourse = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='row'>
                <div className='col-md-2'>
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className='col-md-10'>
                    <AddCourseForm></AddCourseForm>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;