import React, { useState } from 'react';
import Header from './Header/Header';
import Courses from './Courses/Courses';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import FindMore from './FineMore/FindMore';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [setCourseDetails] = useState({})
    return (
        <div>
            <Header></Header>
            <Courses setCourseDetails={setCourseDetails}></Courses>
            <Reviews></Reviews>
            <WhyChooseUs></WhyChooseUs>
            <FindMore></FindMore>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;