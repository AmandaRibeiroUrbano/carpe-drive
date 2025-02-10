import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../Theme/ThemeToggle";
import logo from "@assets/logo&name.png";
import logoresponsive from "@assets/center_logo&name.png";
import MenuLink from "@components/MenuLink";
import Button from "@components/Button";
import Login from "@components/Login";
import { UserCircle2, XIcon } from "lucide-react";
const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const loginRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (loginRef.current && !loginRef.current.contains(event.target)) {
                setShowLogin(false);
            }
        };
        if (showLogin) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showLogin]);
    return (_jsxs("header", { className: "w-full flex items-center justify-between sticky top-0 z-50 py-4 px-8 bg-white dark:bg-primary shadow-md", children: [_jsx("div", { className: "flex items-center space-x-4", children: _jsx("img", { srcSet: `${logoresponsive} 600w, ${logo} 1200w`, alt: "Logo", className: "h-10 w-auto" }) }), _jsx("div", { className: "flex items-center gap-8", children: _jsxs("nav", { className: "flex items-center gap-4", children: [_jsx(MenuLink, { to: "/", children: "In\u00EDcio" }), _jsx(MenuLink, { to: "/*", children: "Sobre" })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(ThemeToggle, {}), _jsxs(Button, { onClick: () => setShowLogin(true), className: "flex !rounded-full md:!rounded-2xl flex-row gap-2 items-center h-8 !w-auto !px-2", children: [_jsx(UserCircle2, {}), _jsx("p", { className: "hidden md:block", children: "Entrar / Cadastre-se" }), showLogin && (_jsxs("div", { ref: loginRef, className: "absolute top-full right-0 mx-5 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-96 z-50", children: [_jsx("button", { onClick: () => setShowLogin(false), className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white", children: _jsx(XIcon, { className: "w-5" }) }), _jsx(Login, {})] }))] })] })] }));
};
export { Header };
