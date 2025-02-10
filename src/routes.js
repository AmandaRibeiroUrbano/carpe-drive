import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Erro from "@pages/Erro";
import Register from "@pages/Register";
import { Header } from "@components/Header";
function RoutesApp() {
    return (_jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/cadastro", element: _jsx(Register, {}) }), _jsx(Route, { path: "*", element: _jsx(Erro, {}) })] })] }));
}
export default RoutesApp;
