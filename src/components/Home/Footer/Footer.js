import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='footer-bg mt-5'>
            <div className='row footer-main '>
                <div className="col-md-4  text-center">
                    <h1 className='text-white'>Coders <span className='text-success'>World</span></h1>
                    <h2 style={{fontSize:'35px', color: 'white'}} className='mt-3'>
                        <span className='m-2'><FontAwesomeIcon icon={faFacebookSquare} /></span>
                        <span className='m-2'><FontAwesomeIcon icon={faInstagram} /></span>
                        <span className='m-2'><FontAwesomeIcon icon={faTwitterSquare} /></span>
                        <span className='m-2'><FontAwesomeIcon icon={faYoutubeSquare} /></span>
                        </h2>
                </div>
                <div className="col-md-2  text-white support-text  ">
                    <h3 className='mb-4'>Support</h3>
                        <Link to='#'><li>Contact Us</li></Link>
                         <Link to='#'><li>FAQ</li></Link>
                         <Link to='#'><li>Downloads</li></Link>
                         <Link to='#'><li>Pricing</li></Link>
                         <Link to='#'><li>Course Query</li></Link>
                         <Link to='#'><li>Donation</li></Link>
                </div>
                <div className="col-md-2  text-white support-text">
                    <h3 className='mb-4'>Coders World</h3>
                    <Link to='#'><li>About Coders-world</li></Link>
                         <Link to='#'><li>Design</li></Link>
                         <Link to='#'><li>Careers</li></Link>
                         <Link to='#'><li>Newsroom</li></Link>
                         <Link to='#'><li>Access</li></Link>
                         <Link to='#'><li>Donation</li></Link>
                </div>
                <div className="col-md-4  text-white text-center">
                    <p><span className='m-2'><FontAwesomeIcon icon={faEnvelope}/></span>stray up to date on the latest from coders-world</p>
                    <br/>
                    <input style={{height:'40px', width: '50%', textAlign:'center'}} type="text" placeholder="Enter your email Address"/><br/>
                    <button className='btn btn-primary mt-3'>Sign Up</button>
                </div>

            </div>

            <p className='text-white mt-5 py-3 text-center'><small> Coders-World @{(new Date()).getFullYear()} All Right Reserved.</small></p>
            
        </div>


    );
};

export default Footer;