import React from 'react';
import { useForm } from "react-hook-form";


const ReviewForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('https://tranquil-tor-13742.herokuapp.com/userReview', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert('Thank You For Your Review.')
      }
    })
  };
  return (
    <div className='m-5'>
      <div>
        <div className='mb-3 d-flex justify-content-center'>
          <h2>User Review</h2>
        </div>
        <div className='mb-3 d-flex justify-content-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
            <input className="form-control" {...register("name", { required: true })} /> <br />
            <label>Address:</label>
            <input className="form-control" {...register("address", { required: true })} /> <br />
            <label>Review:</label>
            <textarea className="form-control" {...register("review", { required: true })} /> <br />
            <input className="form-control bg-dark text-white" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;