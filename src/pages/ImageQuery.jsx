// pages/ImageQuery.jsx
import React, { useState } from "react";
import { Box, IconButton, TextField, InputAdornment, Typography } from "@mui/material";
import { Menu as MenuIcon, Send as SendIcon } from "@mui/icons-material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Home as HomeIcon, Image as ImageIcon } from "@mui/icons-material";
import "../styles/imagequery.css";


const ImageQuery = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [query, setQuery] = useState("");
  const drawerWidth = 240;

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/home" },
    { text: "Image Query", icon: <ImageIcon />, route: "/image" },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleQuerySubmit = () => {
    if (query.trim()) {
      console.log("Query submitted:", query);
      setQuery("");
    }
  };

  return (
    <Box className="image-query-container">
      <Navbar />
      
      <Box className="content-wrapper">
        <Sidebar 
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          menuItems={menuItems}
          width={drawerWidth}
        />
        
        <Box className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {!sidebarOpen && (
            <IconButton onClick={toggleSidebar} className="menu-toggle-btn">
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h4" className="page-title">
            Image Query Page
          </Typography>
          <Typography className="page-description">
            This is your Hero-styled GenAI interface for image queries.
          </Typography>
        </Box>
      </Box>

      <Box 
        className="input-container"
        style={{ left: sidebarOpen ? drawerWidth : 0 }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask your image-related query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleQuerySubmit()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={handleQuerySubmit} 
                  className="submit-btn"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageQuery;