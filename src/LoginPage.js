// src/LoginPage.js
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Correct import

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [update, setUpdate] = useState("");
    const navigate = useNavigate();

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log(userCredential.user);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Typography sx={{ fontSize: "50px", paddingTop: "40px" }}>
                    Login Page
                </Typography>
                <input
                    placeholder="Enter your email id"
                    style={{
                        height: "40px",
                        width: "200px",
                        marginTop: "20px",
                        fontSize: "15px",
                    }}
                    onChange={handleEmail}
                />
            </Grid>
            <Grid item xs={12}>
                <input
                    placeholder="Enter your password"
                    style={{
                        height: "40px",
                        width: "200px",
                        marginTop: "20px",
                        fontSize: "15px",
                    }}
                    onChange={handlePassword}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" sx={{ marginTop: "10px" }} onClick={handleLogin}>
                    LogIn
                </Button>
                {update}
            </Grid>
            <Grid item xs={12}>
                Don't have an account? <Link to="/signup">SignUp</Link>
            </Grid>
        </Grid>
    );
}

