import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', style = {} }) => {
    return (
        <motion.button
            className={`${variant}-btn ${className}`}
            onClick={onClick}
            type={type}
            style={style}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
