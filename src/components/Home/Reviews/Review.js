import React from 'react';
import './review.css'

const Review = ({ review }) => {
    return (
        <div className='col-md-4'>
            <div className='border shadow-sm rounded p-5'>
                <div className='row mb-3'>
                    <div className="col-md-3 text-left">
                        <img className='circle' style={{ width: '80%' }} src={review.imageURL} alt="" />
                    </div>
                    <div className="col-md-9">
                        <h5 className='text-primary'>{review.name}</h5>
                        <h6 className='text-secondary'>{review.address}</h6>
                    </div>
                </div>

                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;