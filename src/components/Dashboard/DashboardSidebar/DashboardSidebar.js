import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboardSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { userContext } from '../../../App';

const DashboardSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [adminEmail, setAdminEmail] = useState({})

    useEffect(()=>{
        fetch(`https://tranquil-tor-13742.herokuapp.com/adminPanel/${loggedInUser.email}`)
        .then(res => res.json())
        .then(res => setAdminEmail(res))
    },[loggedInUser.email])

    console.log(adminEmail.email)

    if (loggedInUser.email === adminEmail.email) {
        return (
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                <li>
                    <Link to="/orderList" className="text-white">
                        Order List
                    </Link>
                </li>
                <li>
                    <Link to="/addCourse" className="text-white" >
                        Add Course
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white" >
                      Make Admin
                    </Link>
                </li>
                <li>
                    <Link to="/manageCourse" className="text-white" >
                        Manage Course
                    </Link>
                </li>
                    </ul>
        </div>
    );
      }
      else{
        return (
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                <li>
                    <Link to="/buyCourse" className="text-white">
                        Buy Course
                    </Link>
                </li>
                <li>
                    <Link to="/courseList" className="text-white">
                        Course Order List
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        Review
                    </Link>
                </li>
                </ul>
        </div>
    );
      }
};

export default DashboardSidebar;