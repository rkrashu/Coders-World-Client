import React, { useEffect, useState } from 'react';
import Review from './Review';


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://tranquil-tor-13742.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-5 py-4'>
            <div className='my-5 text-center'>
                <h2 className='text-info'>Review</h2>
                <h6 className='text-secondary'>What our users say about us</h6>
            </div>
            <div className='row px-3'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;