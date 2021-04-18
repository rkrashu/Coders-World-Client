import React from 'react';
import reactImag from '../../../image/react.png'
import laravel from '../../../image/laravel.png'
import reactNative from '../../../image/reactnative.png'
import java from '../../../image/java.png'
import android from '../../../image/android.png'


const FindMore = () => {
    return (
        <div className='mb-5 pb-5'>
            <div className="text-center mb-5">
                <h2>Find More</h2>
                <h6 className='text-secondary'>Get other course by Rashidul Karim</h6>
            </div>
            <div className='row text-center m-2 '>
                <div className="col-md-4 border rounded p-3">
                    <img style={{width:'15%'}} src={reactImag} alt=""/>
                    <h3>React JS</h3>
                </div>
                <div className="col-md-4 border rounded p-3">
                <img style={{width:'15%'}} src={laravel} alt=""/>
                    <h3>Laravel</h3>
                </div>
                <div className="col-md-4 border rounded p-3">
                <img style={{width:'15%'}} src={reactNative} alt=""/>
                    <h3>React Native</h3>
                </div>
                <div className="col-md-4 border rounded p-3">
                <img style={{width:'15%'}} src={java} alt=""/>
                    <h3>Java</h3>
                </div>
                <div className="col-md-4 border rounded p-3">
                <img style={{width:'15%'}} src={reactNative} alt=""/>
                    <h3>React Js</h3>
                </div>
                <div className="col-md-4 border rounded p-3">
                <img style={{width:'15%'}} src={android} alt=""/>
                    <h3>Android</h3>
                </div>
            </div>
            
        </div>
    );
};

export default FindMore;