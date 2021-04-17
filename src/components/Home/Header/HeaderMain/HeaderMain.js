import React from 'react';
import './header.css';

const HeaderMain = () => {
    return (
        <div className="container-fluid text-center header-bg p-0">
            <div className="overlay">
                <div className="row">
                    <div className="col-md-6 m-auto top-content">
                        <h1 className="header-title">React JS</h1>
                        <p className="header-des">Learn With Rashidul Karim</p>
                        <p className="header-des">Learn Something Good & Do Something Better</p>
                        <button className="btn btn-success">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;