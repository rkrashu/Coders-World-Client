import React from 'react';

const CourseData = ({ course, index }) => {
    return (
        <tr><td>{index+1}</td>
            <td>{course.Email}</td>
            <td>{course.CourseName}</td>
            <td>${course.price}</td>
        </tr>
    );
};

export default CourseData;