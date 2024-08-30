// src/SignUpPage.js
import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Correct import

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleSignUp = async () => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            console.log(userCredential.user);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Typography sx={{ fontSize: "50px", paddingTop: "40px" }}>
                    SignUp Page
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
                <Button
                    variant="contained"
                    sx={{ marginTop: "10px" }}
                    onClick={handleSignUp}
                >
                    SignUp
                </Button>
            </Grid>
            <Grid item xs={12}>
                Already have an account? <Link to="/login">Login</Link>
            </Grid>
        </Grid>
    );
}

