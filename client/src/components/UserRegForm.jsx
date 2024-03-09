import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UserRegForm = () => {

  const navigate = useNavigate();
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    bio: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const register = async() => {
    let fData = new FormData();
    for (let value in formData) {
      fData.append(value, formData[value]);
    }
    console.log(fData);
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register_student",
      {
        method: "POST",
        body: fData,
      }
    );
    const savedUser = await savedUserResponse.json();
    console.log(savedUser);
  }
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission (e.g., sending data to a server)
    await register();
    navigate('/home');
    // For demonstration purposes, log the form data to the console
    //console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
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
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
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
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegForm;