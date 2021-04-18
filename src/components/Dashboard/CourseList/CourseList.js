import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Navbar from '../../Home/Header/Navbar/Navbar'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import CourseData from './CourseData/CourseData';

const CourseList = () => {
  const [loggedInUser] = useContext(userContext)
  const [courseList, setCourseList] = useState([])

  useEffect(() => {
    fetch(`https://tranquil-tor-13742.herokuapp.com/courseList?email=` + loggedInUser.email)
      .then(res => res.json())
      .then(data => setCourseList(data))

  }, [loggedInUser])

  return (
    <div>
      <Navbar></Navbar>
      <div className='row'>
        <div className='col-md-2'>
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className='col-md-10'>
          <table class="table">
            <thead>
              <tr>
              <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Course Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                courseList.map((course, index) => <CourseData course={course} index={index}></CourseData>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseList;