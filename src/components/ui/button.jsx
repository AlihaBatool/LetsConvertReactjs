import React from 'react';
import { cn } from '../../lib/utils'; // or your own `cn` function

const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button ref={ref} className={cn("inline-flex items-center", className)} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
