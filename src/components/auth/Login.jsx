import React, { useRef } from "react";
import { Container } from "../container/Container";
import Layout from "../layout/Layout";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailData", "abc@mail.com");
    const getPassword = localStorage.getItem("passwordData", "123");
    const handleSubmit = () => {
        if(email.current.value === "abc@mail.com" && password.current.value === "123") {
          localStorage.setItem("emailData", email.current.value);
          localStorage.setItem("passwordData", password.current.value);
        }
        else{
            alert("Please enter valid email and password");
        }
    }
    
    return (
        <>
        {getEmail && getPassword ? <Layout /> :
        <Container title="React Testing Area" description="To login to app, please use abc@mail.com for the user email and 123 for the passord.">
            <div className="w-3/4 mx-auto mt-5">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label>User Email:</label>
                    <input type="text" name="userName" className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5" ref={email} />
                    <label>Password:</label>
                    <input type="password" name="password" className="border-2 border-gray-600 py-2 px-1 rounded-lg text-lg my-5" ref={password}/>
                    <button className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500">Login</button>
                </form>
            </div>
        </Container>
        }
        </>
    )
    }

export default Login