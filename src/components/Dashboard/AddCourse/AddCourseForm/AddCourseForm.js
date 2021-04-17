import React from 'react';
import { useForm } from "react-hook-form";

const AddCourseForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('https://tranquil-tor-13742.herokuapp.com/addCourse', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Course Added Successfully.')
        }
      })
  };

  return (
    <div className='m-5'>
      <div>
        <div className='mb-3 d-flex justify-content-center'>
          <h2>Add Course</h2>
        </div>
        <div className='mb-3 d-flex justify-content-center'>
          <form style={{ width: '30%' }} onSubmit={handleSubmit(onSubmit)}>
            <label>Course Name:</label>
            <input className="form-control" {...register("name", { required: true })} /> <br />
            <label>Duration:</label>
            <input className="form-control" {...register("duration", { required: true })} /> <br />
            <label>Details:</label>
            <textarea className="form-control" {...register("details", { required: true })} /> <br />
            <label>Price:</label>
            <input className="form-control" {...register("price", { required: true })} /> <br />
            <input className="form-control bg-dark text-white" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;