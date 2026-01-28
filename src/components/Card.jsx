import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, description, icon, image, children, className = '', style = {} }) => {
    return (
        <motion.div
            className={`card glass-panel ${className}`}
            style={style}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            {image && <div className="card-image"><img src={image} alt={title} /></div>}
            <div className="card-content">
                {icon && (
                    <motion.div
                        className="card-icon"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        {icon}
                    </motion.div>
                )}
                {title && <h3 className="card-title">{title}</h3>}
                {children || <p className="card-description">{description}</p>}
            </div>
        </motion.div>
    );
};

export default Card;
