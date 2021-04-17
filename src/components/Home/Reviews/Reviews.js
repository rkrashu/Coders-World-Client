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
        <div className='my-5'>
            <div className='my-5 d-flex align-items-center justify-content-center'>
                <h2 className='text-info'>Review</h2>
            </div>
            <div className='row'>
                {
                    reviews.map(review => <Review review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;