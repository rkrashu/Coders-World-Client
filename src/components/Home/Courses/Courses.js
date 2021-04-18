import React, { useEffect, useState } from 'react';
import Course from './Course';



const Courses = () => {
    const [courses, setCourses] = useState([])
  useEffect(()=>{
    fetch("https://tranquil-tor-13742.herokuapp.com/courses")
    .then(res=> res.json())
    .then(data=> setCourses(data) )
  }, [])
    return (
        <div>
            <div className='mb-3 d-flex align-items-center justify-content-center my-5 py-5'>
                <h2 className='text-info'>Our Courses</h2>
            </div>
            <div className='row px-3'>
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;