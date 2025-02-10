import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
export default function MenuLink({ children, to }) {
    return (_jsx(NavLink, { className: ({ isActive }) => isActive
            ? "text-accent border-b-[1px] border-accent hover:text-[#b8972b]"
            : "text-gray-500 hover:text-accent", to: to, children: children }));
}
