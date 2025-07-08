// components/Sidebar.jsx
import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css"; // Ensure you have the correct path to your CSS file

const Sidebar = ({ 
  sidebarOpen, 
  toggleSidebar, 
  menuItems,
  width = 240,
  background = "linear-gradient(120deg, rgb(211, 27, 27), #000000)"
}) => {
  const navigate = useNavigate();
  
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={sidebarOpen}
      className="sidebar-drawer"
      style={{
        "--drawer-width": `${width}px`,
        "--sidebar-bg": background
      }}
    >
      <Box className="sidebar-header">
        <IconButton onClick={toggleSidebar} className="sidebar-toggle-btn">
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      
      <List className="sidebar-list">
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            onClick={() => navigate(item.route)}
            className="sidebar-list-item"
          >
            <ListItemIcon className="sidebar-icon">{item.icon}</ListItemIcon>
            <ListItemText 
              primary={item.text} 
              className="sidebar-text"
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;