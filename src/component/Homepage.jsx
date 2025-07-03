import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import {
  Image,
  VideoLibrary,
  PhotoCamera,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const cardData = [
  {
    title: "Image Query",
    description: "Run image-based queries and fetch visual insights.",
    icon: <Image fontSize="large" />,
    route: "/image",
  },
  {
    title: "Video Query",
    description: "Analyze videos and extract relevant information.",
    icon: <VideoLibrary fontSize="large" />,
    route: "/video",
  },
  {
    title: "Image Training",
    description: "Train models using labeled image datasets.",
    icon: <PhotoCamera fontSize="large" />,
    route: "/train-image",
  },
];

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Box sx={{ padding: 4, backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ color: "#E60000" }}
        >
          Welcome to Hero AI Platform
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 5 }} fontWeight="700">
          Choose a tool below to get started
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  onClick={() => navigate(card.route)}
                  sx={{
                    cursor: "pointer",
                    background: "linear-gradient(120deg,rgb(211, 27, 27), #000000)",
                    color: "white",
                    borderRadius: "16px",
                    boxShadow: 6,
                    height: 160,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 2,
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 1 }}>{card.icon}</Box>
                    <Typography variant="h6" fontWeight="600">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
