import React, { useState } from 'react';
import Header from './Header/Header';
import Courses from './Courses/Courses';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const [courseDetails, setCourseDetails] = useState({})
    return (
        <div>
            <Header></Header>
            <Courses setCourseDetails={setCourseDetails}></Courses>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;