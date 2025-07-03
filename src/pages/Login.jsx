import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import "../styles/login.css";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AtgLogo from "../assets/logos/Atgeir-New-Logo_Dark.svg";
import heroLogo from "../assets/logos/heroLogo.png";
import bikeImage1 from "../assets/logos/heroLogo1.png";

const Login = () => {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value.toLowerCase();
    let password = e.target.password.value;

    if (
      (email === "genaidemo@atgeirsolutions.com" &&
        password === "AtgeirAdmin@1234!") ||
      (email === "ashok_leyland_demo@atgeirsolutions.com" &&
        password === "AtgeirAdmin@1234") ||
      (email === "webinardemo@atgeirsolutions.com" &&
        password === "AtgeirAdmin@1234") ||
      (email === "urvashi@atgeirsolutions.com" && password === "Urvashi@1234") ||
      (email === "m&mdemo@atgeirsolutions.com" && password === "M&MDemo@2026!!")
    ) {
      sessionStorage.setItem("authentication", JSON.stringify(email));
      sessionStorage.setItem("region", JSON.stringify("INT"));
      setTimeout(() => {
        navigate("/home");
      }, 100);
    } else {
      setAlert(true);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Left Side Bike Image with animation */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <motion.img
          src={bikeImage1}
          alt="Hero Bike"
          initial={{ x: "-100%", opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12 }}
          style={{
            width: "100%",
            maxWidth: "600px",
            objectFit: "contain",
            zIndex: 1,
          }}
        />
      </Grid>

      {/* Right Side Login Form with animation from right to left */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#fff" }}
      >
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={6}
            sx={{
              padding: 6,
              maxWidth: 450,
              width: "90%",
              borderLeft: "5px solid #E60000",
              borderRadius: "10px",
              zIndex: 2,
            }}
          >
            <form onSubmit={handleLogin}>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: 700 }}
              >
                Empowering Innovation with Generative AI
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
                Welcome Back. Please login to your account
              </Typography>

              <FormControl fullWidth sx={{ mb: 3 }} required>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <OutlinedInput
                  id="email"
                  name="email"
                  label="Email Address"
                  placeholder="Enter email"
                  type="email"
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E60000",
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }} required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  type="password"
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E60000",
                    },
                  }}
                />
              </FormControl>

              <Button
                variant="contained"
                fullWidth
                type="submit"
                className="button-10"
                sx={{ py: 1.5, mb: 3 }}
              >
                Log In
              </Button>

              {alert && (
                <Alert
                  severity="error"
                  onClose={() => setAlert(false)}
                  sx={{ mb: 3 }}
                >
                  Wrong Email or Password
                </Alert>
              )}

              <Box display="flex" justifyContent="space-between" mt={2}>
                {/* <Box component="img" src={AtgLogo} alt="Atgeir Logo" width={125} /> */}
                {/* <Box component="img" src={heroLogo} alt="Hero Logo" width={130} /> */}
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Login;
