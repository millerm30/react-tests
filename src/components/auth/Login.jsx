import React, { useRef } from "react";
import { Container } from "../container/Container";
import Layout from "../layout/Layout";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");
    const handleSubmit = () => {
        if(email.current.value === "abc@mail.com" && password.current.value === "123");
        localStorage.setItem("emailData", "abc@mail.com");
        localStorage.setItem("passwordData", "123");   
    };
    
    return (
        <Container title="User Login and Logout" description="Create a user login with local storage with a guest user email (abc@mail.com) and password (123) and goto page on correct user info with a logout button to bring back to main page">
            <div className="w-3/4 mx-auto mt-5">
                {
                getEmail && getPassword ? <Layout /> :
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label>User Email:</label>
                    <input type="text" name="userName" className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5" ref={email} />
                    <label>Password:</label>
                    <input type="password" name="password" className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5" ref={password}/>
                    <button className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500">Login</button>
                </form>
                }
            </div>
        </Container>
    )
    }

export default Login