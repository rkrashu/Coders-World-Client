import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';



const ReviewForm = () => {
  const { register, handleSubmit } = useForm();
  const [imageLink, setImageLink] = useState(null)
  const handleImageUpload = event => {
    const imageData = new FormData()
    imageData.set('key', '3d07d6945d21f7c878e715bc02050b31')
    imageData.append('image', event.target.files[0])

    axios.post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageLink(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const onSubmit = data => {
    if (imageLink !== null) {
      const reviewData = data;
      reviewData.imageURL = imageLink;
      fetch('https://tranquil-tor-13742.herokuapp.com/userReview', {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(reviewData)
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            alert('Thank You For Your Review.')
          }
        })
    }
    else {
      alert('Image is uploading , Please wait')
    }

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
            <input type="file" name="image" onChange={handleImageUpload} /> <br/><br/>
            <input className="form-control bg-dark text-white" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;