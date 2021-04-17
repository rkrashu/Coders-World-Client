import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Course = ({course}) => {
    return (
        <div className='col-md-4'>
            <div className='border shadow-lg rounded p-5'>
                <h5 className='text-primary'>{course.name}</h5>
                <h6 className='text-secondary'>{course.duration}</h6>
                <p>{course.details}</p>
                <h6>Price: $ {course.price}</h6>
                <div className='mb-2'>
                <Link to={"/checkout/"+ course._id}><button className='btn-primary'>Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course; 