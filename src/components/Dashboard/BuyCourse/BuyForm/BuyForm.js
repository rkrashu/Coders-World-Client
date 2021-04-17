import React, { useContext, useState } from 'react';
import { set, useForm } from "react-hook-form";
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { userContext } from '../../../../App';
import MyCheckOutForm from './MyCheckOutForm/MyCheckOutForm'
const stripePromise = loadStripe('pk_test_51IeOhPGcru3mCo7NjNTrWo26r4c2BRYWcLLEKH7RsAMD00QVltDuovReht95Ze48is3gj0kZOvNh9Y3eoIoDkvUn00p0tEMElC');

const BuyForm = ({ courseDetails }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)
  const [userInfo, setUserInfo] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setUserInfo(data)
  };
const handleOrderSuccess = paymentId =>{
  const orderDetails = {
    ...userInfo,
    time: new Date(),
    paymentId
  }
  fetch('https://tranquil-tor-13742.herokuapp.com/buyCourse', {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(orderDetails)
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert('Your Order Place Successfully. Thank You')
      }
    })
}

  return (
    <div className='m-5'>
      <div>
        <div className='mb-3 d-flex justify-content-center'>
          <h2>Buy Course</h2>
        </div>
        <div className='mb-3 d-flex justify-content-center'>
          {
            !userInfo && <form style={{ width: '30%' }} onSubmit={handleSubmit(onSubmit)}>
              <label>Name:</label>
              <input className="form-control" defaultValue={loggedInUser.name} {...register("Name", { required: true })} /> <br />
              <label>Email:</label>
              <input className="form-control" defaultValue={loggedInUser.email} {...register("Email", { required: true })} /> <br />
              <label>Phone:</label>
              <input className="form-control"  {...register("phone", { required: true })} /> <br />
              <label>Course Name:</label>
              <input className="form-control" defaultValue={courseDetails.name} {...register("CourseName", { required: true })} /> <br />
              <label>Price:</label>
              <input className="form-control" defaultValue={courseDetails.price} {...register("price", { required: true })} /> <br />

              <input className="form-control bg-dark text-white" type="submit" />
            </form>
          }

          {
            userInfo && <div>
            <h5>Make Payment:</h5>
            <Elements stripe={stripePromise}>
              <MyCheckOutForm handleOrderSuccess={handleOrderSuccess} setError={setError} success={setSuccess}></MyCheckOutForm>
            </Elements>
          </div>
          }
        </div>
        <div className='d-flex justify-content-center'>
        {
          error && <p style={{color:'red'}}>{error.message}</p>
        }
        {
          success && <p style={{color:'green'}}>Your Payment is Successful.</p>
        }
        </div>
      </div>
    </div>
  );
};

export default BuyForm;