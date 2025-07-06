import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Homepage from '../component/Homepage';
import ImageQuery from '../pages/ImageQuery';
import VideoQuery from '../pages/VideoQuery';
import ImageTraining from '../pages/ImageTraining';

function MainRoutes() {
  return (
    <Routes>
      {/* Default route redirects to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Login page */}
      <Route path="/login" element={<Login />} />
      
      {/* Homepage */}
      <Route path="/home" element={<Homepage />} />
      
      {/* Feature pages */}
      <Route path="/image" element={<ImageQuery />} />
      <Route path="/video" element={<VideoQuery />} />
      <Route path="/train-image" element={<ImageTraining />} />
      
      {/* Catch all route - redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default MainRoutes;
