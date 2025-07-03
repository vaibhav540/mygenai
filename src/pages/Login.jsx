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
import "../styles/watermark.css";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AtgLogo from "../assets/logos/Atgeir-New-Logo_Dark.svg";
import heroLogo from "../assets/logos/heroLogo.png";
import bikeImage1 from "../assets/logos/heroLogo1.png";
import Watermark from "../component/Watermark";

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
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
          width: { xs: "100%", md: "auto" },
          maxWidth: 900,
          px: 2,
        }}
      >
        {/* Logo Image with same height as form, no background */}
        <motion.div
          initial={{ x: -80, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 12 }}
          style={{
            height: 480,
            width: 340,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            borderRadius: 0,
            boxShadow: "none",
            marginBottom: 0,
          }}
        >
          <img
            src={bikeImage1}
            alt="Hero Logo"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              background: "none",
              borderRadius: 0,
              boxShadow: "none",
              display: "block",
            }}
          />
        </motion.div>
        {/* Animated Login Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ width: "100%", maxWidth: 400, position: "relative" }}
        >
          <Paper
            elevation={6}
            sx={{
              padding: 6,
              maxWidth: 400,
              width: "100%",
              borderLeft: "5px solid #E60000",
              borderRadius: "10px",
              zIndex: 2,
              position: "relative",
              margin: "0 auto",
              minHeight: 560,
              height: 560,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                <img src={heroLogo} alt="Hero Logo" style={{ width: 120, height: "auto" }} />
              </div>
              <Typography
                variant="h5"
                sx={{ color: "black", fontWeight: 700 }}
              >
                Empowering Innovation with Generative AI
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
                Welcome Back. Please login to your account
              </Typography>
              <form onSubmit={handleLogin} id="login-form">
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
                {alert && (
                  <Alert
                    severity="error"
                    onClose={() => setAlert(false)}
                    sx={{ mb: 3 }}
                  >
                    Wrong Email or Password
                  </Alert>
                )}
              </form>
            </Box>
            <Box>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                className="button-10"
                sx={{ py: 1.5, mb: 2 }}
                form="login-form"
              >
                Log In
              </Button>
              <Watermark size="small" />
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Login;
