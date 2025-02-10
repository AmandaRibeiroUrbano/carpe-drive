
import { MouseEventHandler } from 'react';

const Button = ({ onClick, type = 'button', children, className = '', ...props }: { onClick?: MouseEventHandler<HTMLButtonElement>, type?: 'button' | 'submit' | 'reset', children?: React.ReactNode, className?: string }) => {

    return(
        <button
        type={type}
        onClick={onClick}
        className={`w-full font-dmsans bg-accent text-white dark:text-gray-900 text-sm py-2 px-4 rounded-md capitalize hover:bg-accent/90 transition-colors ${className}`}
          {...props}
      >
        {children}
      </button>
    )
}

export default Button