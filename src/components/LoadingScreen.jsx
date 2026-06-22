import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/logo.png" alt="Canal Ejecutivo" className="loading-logo" />
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
