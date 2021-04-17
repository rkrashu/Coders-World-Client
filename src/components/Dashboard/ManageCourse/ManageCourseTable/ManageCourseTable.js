import React from 'react';

const ManageCourseTable = ({course}) => {
    const handleDelete= (id) =>{
        fetch(`https://tranquil-tor-13742.herokuapp.com/deleteCourse/${id}`, {
        method: "DELETE",
      })
      .then(res=> res.json())
      .then(data => {
          if (data) {
              alert('Course Deleted Successfully.')
          }
      })
    }
    return (
        <tr>
            <td>{course.name}</td>
            <td>{course.duration}</td>
            <td>$ {course.price}</td>
            <td><button className='btn-primary border rounded bg-dark' onClick={()=>handleDelete(course._id)}>Delete</button></td>
        </tr>
    );
};

export default ManageCourseTable;