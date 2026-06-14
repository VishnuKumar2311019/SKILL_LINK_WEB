import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  delay = 0,
}) => {
  const cardContent = (
    <div
      onClick={onClick}
      className={`bg-white border border-slate-100/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );

  if (hoverEffect) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -6, scale: 1.01 }}
        className="h-full"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
};

export default Card;
