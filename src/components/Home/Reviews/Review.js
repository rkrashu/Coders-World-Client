import React from 'react';

const Review = ({review}) => {
    return (
        <div className='col-md-4'>
            <div className='border shadow-lg rounded p-5'>
                <h5 className='text-primary'>{review.name}</h5>
                <h6 className='text-secondary'>{review.address}</h6>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default Review;