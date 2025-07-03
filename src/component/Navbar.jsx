import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AtgLogo from "../assets/logos/Atgeir-New-Logo_Light.svg";
import heroLogo from "../assets/logos/heroLogo.png";


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#111111c9", px: 3 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component={Link} to="/home" sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={heroLogo}
            alt="Hero Logo"
            sx={{ width: 130 }}
          />
         
        </Box>

       

        {/* Logout Icon */}
        <IconButton onClick={handleLogout} sx={{ color: "white" }}>
          <PowerSettingsNewIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
