import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import ManageCourseTable from './ManageCourseTable/ManageCourseTable';

const ManageCourse = () => {
    const [courseList, setCourseList] = useState([])

    useEffect(()=>{
        fetch('https://tranquil-tor-13742.herokuapp.com/manageCourse', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then (data => setCourseList(data))
    
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
      <th scope="col">Course Name</th>
      <th scope="col">Duration</th>
      <th scope="col">Price</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {
      courseList.map(course => <ManageCourseTable course = {course}></ManageCourseTable>)
  }
  </tbody>
</table>
        </div>
    </div>
    </div>
    );
};

export default ManageCourse;