import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '', username: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const mutationResponse = await addUser ({
            variables: {
                email: formState.email,
                password: formState.password,
                username: formState.username,           
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            <Link to = "/login">Go to Login</Link>

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className = "flex-row space-between my-2">
                    <label htmlFor = "userName">User Name:</label>
                    <input
                      placeholder = "User Name"
                      name = "userName"
                      type = "userName"
                      id = "userName"
                      onChange = {handleChange}
                    />
                </div>
                <div className = "flex-row space-between my-2">
                    <label htmlFor = "email">Email:</label>
                    <input
                      placeholder = "youremail@test.com"
                      name = "email"
                      type = "email"
                      id = "email"
                      onChange = {handleChange}
                    />
                </div>
                <div className = "flex-row space-between my-2">
                    <lable htmlFor = "password">Password:</lable>
                    <input
                      placeholder = "********"
                      name = "password"
                      type = "password"
                      id = "password"
                      onChange = {handleChange}
                    />
                </div>
                <div className = "flex-row flex-end">
                    <button type = "submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;