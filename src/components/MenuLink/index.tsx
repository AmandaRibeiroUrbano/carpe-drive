import {  NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface MenuLinkProps {
    children: ReactNode;
    to: string;
}

export default function MenuLink({children, to}: MenuLinkProps){

    return(
        <NavLink 
            className={({ isActive }) => 
                isActive 
                  ? "text-accent border-b-[1px] border-accent hover:text-[#b8972b]" 
                  : "text-gray-500 hover:text-accent"
              }
            to={to}
        >     
                {children}
        </NavLink>
    )
}