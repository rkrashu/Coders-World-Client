import React from 'react';
import './whyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <section className="whyChooseUs">
        <div className="center-div">
           <h2>Why you choice Us ?</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
        </div>
        

        <div className="choices">
            <div className="left-top">
                <div className="left-top-circle">
                    <img src="https://i.ibb.co/VJmZKFj/high-quality.png" alt="highquality"/>
                </div>

                <div className="left-top-text">
                    <h3>High Quality Course</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
                
            </div>
            

            <div className="right-top">
                <div className="right-top-circle">
                    <img src="https://i.ibb.co/qgKNr59/backup.png"alt="backup"/>
                </div>

                <div className="right-top-text">
                    <h3>Everybody Backups</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </div>



            <div className="right-bottom">
                <div className="right-bottom-circle">
                    <img src="https://i.ibb.co/Kbd0xbp/smart.png" alt="smart"/>
                </div>

                <div className="right-bottom-text">
                    <h3>Smart intelligence Models</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </div>



            <div className="left-bottom">
                <div className="left-bottom-circle">
                    <img src="https://i.ibb.co/G53sbGK/customer.png" alt="customer"/>
                </div>

                <div className="left-bottom-text">
                    <h3>24/7 Customer Service</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>
            </div>
        </div>

    </section>
    );
};

export default WhyChooseUs;