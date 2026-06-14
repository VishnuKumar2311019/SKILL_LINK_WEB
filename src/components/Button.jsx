import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30',
    secondary: 'bg-dark text-white hover:bg-slate-800 shadow-md shadow-dark/10 hover:shadow-lg hover:shadow-dark/20',
    outline: 'border-2 border-slate-200 text-dark hover:bg-slate-50 hover:border-slate-300',
    gold: 'bg-accent text-dark hover:bg-amber-500 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30',
    white: 'bg-white text-dark hover:bg-slate-50 shadow-sm hover:shadow-md border border-slate-100',
    minimal: 'text-primary hover:text-blue-700 hover:underline px-0 py-0',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex items-center">{icon}</span>}
    </>
  );

  const animationProps = disabled ? {} : {
    whileHover: { scale: variant === 'minimal' ? 1 : 1.03, y: variant === 'minimal' ? 0 : -1 },
    whileTap: { scale: variant === 'minimal' ? 1 : 0.98 },
  };

  if (to) {
    return (
      <motion.div {...animationProps} className="inline-block">
        <Link to={to} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...animationProps}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default Button;
