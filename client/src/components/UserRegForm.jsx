import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../state/index.js";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const UserRegForm = () => {
  const [pageType, setPageType ] = useState("login");
  let isLogin = pageType === "login" ? true : false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // State to hold form data
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "email" || name === "password") {
      setLoginData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const register = async() => {
    let fData = new FormData();
    for (let value in regData) {
      fData.append(value, regData[value]);
    }
    console.log(regData);
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register_student",
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(regData),
      }
    );
    const savedUser = await savedUserResponse.json();
    console.log(savedUser);
    return savedUserResponse.status;
  }

  const login = async () => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login_student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn.token);
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
          user_type: "student"
        })
      );
    }
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., sending data to a server)
    let stat = 0;
    if (!isLogin) {
      stat = await register();
      setPageType("login");
    }
    else {
      await login();
      navigate('/home');
    }
    // For demonstration purposes, log the form data to the console
    //console.log('Form Data:', regData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={regData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={regData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Bio:
            <input
              type="text"
              name="bio"
              value={regData.bio}
              onChange={handleInputChange}
            />
          </label>
        </>
        )}
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={regData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={regData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        

        <button type="submit">Register</button>
        <h4 onClick={() => setPageType(isLogin ? "register" : "login")}>{isLogin ? "Register" : "Login"}</h4>
      </form>
    </div>
  );
};

export default UserRegForm;