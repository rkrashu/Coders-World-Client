import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddCourse from "./components/Dashboard/AddCourse/AddCourse";
import BuyCourse from "./components/Dashboard/BuyCourse/BuyCourse";
import CourseList from "./components/Dashboard/CourseList/CourseList";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageCourse from "./components/Dashboard/ManageCourse/ManageCourse";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import UserReview from "./components/Dashboard/UserReview/UserReview.js";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]} >
      <Router>
      <Switch>
        <Route path exact ='/'>
          <Home></Home>
        </Route>
        <Route path ='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path ='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path ='/checkout/:id'>
          <BuyCourse></BuyCourse>
        </PrivateRoute>
        <PrivateRoute path ='/courseList'>
          <CourseList></CourseList>
        </PrivateRoute>
        <PrivateRoute path ='/review'>
          <UserReview></UserReview>
        </PrivateRoute>
        <PrivateRoute path ='/orderList'>
          <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path ='/addCourse'>
          <AddCourse></AddCourse>
        </PrivateRoute>
        <PrivateRoute path ='/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path ='/manageCourse'>
          <ManageCourse></ManageCourse>
        </PrivateRoute>
        <PrivateRoute path ='/buyCourse'>
          <BuyCourse></BuyCourse>
        </PrivateRoute>
      </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
