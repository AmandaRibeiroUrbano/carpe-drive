import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ onClick, type = 'button', children, className = '', ...props }) => {
    return (_jsx("button", { type: type, onClick: onClick, className: `w-full font-dmsans bg-accent text-white dark:text-gray-900 text-sm py-2 px-4 rounded-md capitalize hover:bg-accent/90 transition-colors ${className}`, ...props, children: children }));
};
export default Button;
