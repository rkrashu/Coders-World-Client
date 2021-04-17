import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Home/Header/Navbar/Navbar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://tranquil-tor-13742.herokuapp.com/makeAdmin', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Admin Added Successfully')
            }
        })
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className='row'>
                <div className='col-md-2'>
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className='col-md-10'>
                    <div className='m-5'>
                        <div>
                            <div className='mb-3 d-flex justify-content-center'>
                                <h2>Make Admin</h2>
                            </div>
                            <div className='mb-3 d-flex justify-content-center'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label>Name:</label>
                                    <input className="form-control" {...register("name", { required: true })} /> <br />
                                    <label>Email:</label>
                                    <input className="form-control" {...register("email", { required: true })} /> <br />
                                    <input className="form-control bg-dark text-white" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;