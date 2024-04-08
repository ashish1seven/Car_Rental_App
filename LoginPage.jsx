import React, { useState } from "react";
import "./LoginPage.css";
import Server from "../AXIOS/Server";
import Swal from 'sweetalert2'

function Login() {
    const [type, setType] = useState("signIn");

    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
        }
    };

    const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

    const SignInForm = () => {
        const [state, setState] = useState({
            email: "",
            password: ""
        });

        const handleChange = evt => {
            const value = evt.target.value;
            setState({
                ...state,
                [evt.target.name]: value
            });
        };

        const handleOnSubmit = evt => {
            evt.preventDefault();

             Server.login(state).then((res)=>{sessionStorage.setItem("USERDATA", JSON.stringify(res.data))})

            for (const key in state) {
                setState({
                    ...state,
                    [key]: ""
                });
            }
        };

        return (
            <div className="form-container sign-in-container">
                <form onSubmit={handleOnSubmit}>
                    <h1>Sign in</h1>
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
        );
    };

    const SignUpForm = () => {
        const [state, setState] = useState({
            name: "",
            email: "",
            password: "",
            phonenumber: "",
            address: ""
        });

        const handleChange = evt => {
            const value = evt.target.value;
            setState({
                ...state,
                [evt.target.name]: value
            });
        };

        const handleOnSubmit = evt => {
            evt.preventDefault();

            Server.signup(state);
            Swal.fire({
                title: "Registration Successful",
                text: "Now Please Signin",
                icon: "success"
            });


            setState(
                {
                    name: "",
                    email: "",
                    password: "",
                    phonenumber: "",
                    address: ""
                }
            )
        };

        return (
            <div className="form-container sign-up-container">
                <form onSubmit={handleOnSubmit}>
                    <h1>Create Account</h1>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="number"
                        name="phonenumber"
                        value={state.phonenumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                    />
                    <input
                        type="text"
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                        placeholder="Address"
                    />
                    <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        );
    };

    return (
        <div className="App">
            <h2>Sign in/up Form</h2>
            <div className={containerClass} id="container">
                <SignUpForm />
                <SignInForm />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
