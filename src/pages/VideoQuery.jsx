import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  VideoLibrary as VideoIcon,
  ChevronLeft as ChevronLeftIcon,
  Send as SendIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const VideoQuery = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [query, setQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleQuerySubmit = () => {
    if (query.trim()) {
      console.log("Video query submitted:", query);
      setQuery("");
    }
  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        {/* Sidebar Drawer */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={sidebarOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#E60000",
              color: "#fff",
              position: "fixed",
              top: "86px", // place below navbar
              height: "calc(100vh - 64px)",
              zIndex: (theme) => theme.zIndex.appBar - 1,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 8px",
              height: "64px",
            }}
          >
            <IconButton onClick={toggleSidebar} sx={{ color: "#fff" }}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <List>
            {[
              { text: "Home", icon: <HomeIcon />, route: "/home" },
              { text: "Video Query", icon: <VideoIcon />, route: "/video" },
            ].map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.route)}>
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            padding: 3,
            paddingTop: "64px",
            marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
            transition: "margin 0.3s ease",
            height: "calc(100vh - 64px - 80px)",
            overflowY: "auto",
          }}
        >
          {!sidebarOpen && (
            <IconButton
              onClick={toggleSidebar}
              sx={{ position: "absolute", top: 80, left: 16, color: "#E60000" }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h4" sx={{ mb: 4 }}>
            Video Query Page
          </Typography>

          <Typography>
            This is your Hero-styled GenAI interface for video queries.
          </Typography>
        </Box>

        {/* Bottom Input Prompt */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: sidebarOpen ? `${drawerWidth}px` : 0,
            right: 0,
            padding: 2,
            backgroundColor: "#f9f9f9",
            borderTop: "1px solid #ddd",
            transition: "left 0.3s ease",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ask your video-related query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleQuerySubmit()}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleQuerySubmit} sx={{ color: "#E60000" }}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default VideoQuery;
