import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div className='col-md-4'>
            <div className='border shadow-sm rounded p-5'>
                <div className='row mb-3'>
                    <div className="col-md-3 text-left">
                        <img className='circle' style={{ width: '80%' }} src={course.imageURL} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h5 className='text-primary'>{course.name}</h5>
                        <h6 className='text-secondary'>{course.duration}</h6>
                    </div>
                </div>
                <p>{course.details}</p>
                <Link to={"/checkout/"+ course._id}><button className='btn btn-primary'> Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Course; 