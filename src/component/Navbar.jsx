import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Divider,
  Button
} from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import heroLogo from "../assets/logos/heroLogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const open = Boolean(anchorEl);

  // Get user email from sessionStorage
  let email = "";
  try {
    email = JSON.parse(sessionStorage.getItem("authentication")) || "";
  } catch {
    email = "";
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setShowLogoutConfirm(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setShowLogoutConfirm(false);
  };

  const handleSignOutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirm = () => {
    sessionStorage.clear();
    setAnchorEl(null);
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirm(false);
  };

  // const handleAdminDashboard = () => {
  //   setAnchorEl(null);
  //   navigate("/admin-dashboard"); // Placeholder route
  // };

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

        {/* Profile Avatar & Dropdown */}
        <Box>
          <IconButton
            onClick={handleProfileMenuOpen}
            size="large"
            sx={{ ml: 2, color: "white" }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{ sx: { minWidth: 240, borderRadius: 2, mt: 1 } }}
          >
            {/* User Email */}
            <Box sx={{ px: 2, pt: 1, pb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#222' }}>
                {email}
              </Typography>
            </Box>
            <Divider />
            {/* Menu Options or Logout Confirmation */}
            {!showLogoutConfirm ? (
              <>
                <MenuItem onClick={handleSignOutClick}>
                  <ListItemIcon>
                    <PowerSettingsNewIcon fontSize="small" />
                  </ListItemIcon>
                  Sign-out
                </MenuItem>
                {/* <MenuItem onClick={handleAdminDashboard}>
                  <ListItemIcon>
                    <DashboardIcon fontSize="small" />
                  </ListItemIcon>
                  Admin Dashboard
                </MenuItem> */}
              </>
            ) : (
              <Box sx={{ px: 2, py: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
                <Typography variant="body2" sx={{ mb: 1, color: '#E60000', fontWeight: 600 }}>
                  Are you sure you want to sign out?
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" variant="outlined" onClick={handleLogoutCancel} sx={{ color: '#666', borderColor: '#ccc', '&:hover': { borderColor: '#999', background: '#f5f5f5' } }}>No</Button>
                  <Button size="small" variant="contained" onClick={handleLogoutConfirm} sx={{ background: '#E60000', '&:hover': { background: '#cc0000' } }}>Yes</Button>
                </Box>
              </Box>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
