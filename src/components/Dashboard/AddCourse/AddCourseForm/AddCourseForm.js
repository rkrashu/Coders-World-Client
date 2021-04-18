import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddCourseForm = () => {
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
      const courseData = data;
      courseData.imageURL = imageLink;
      fetch('https://tranquil-tor-13742.herokuapp.com/addCourse', {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(courseData)
      })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Course Added Successfully.')
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
            <input type="file" name="image" onChange={handleImageUpload} /> <br/><br/>
            <input className="form-control bg-dark text-white" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;