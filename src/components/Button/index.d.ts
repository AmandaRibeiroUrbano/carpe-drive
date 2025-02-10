import { MouseEventHandler } from 'react';
declare const Button: ({ onClick, type, children, className, ...props }: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default Button;
