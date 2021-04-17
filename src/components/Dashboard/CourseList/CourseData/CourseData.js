import React from 'react';

const CourseData = ({ course }) => {
    return (
        <tr>
            <td>{course.Email}</td>
            <td>{course.CourseName}</td>
            <td>${course.price}</td>
        </tr>
    );
};

export default CourseData;