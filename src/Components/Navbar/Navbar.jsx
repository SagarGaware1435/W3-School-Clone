import React from 'react';
import "../../App.css";
import { useLocation, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "REACT", "MongoDB", "PYTHON", "MYSQL", "JQUERY", "EXCEL", "XML", "DJANGO", "TYPESCRIPT", "ANGULAR", "GIT", "POSTGRESQL", "ASP", "AWS", "KOTLIN", "SASS", "VUE", "CYBERSECURITY"];
    const location = useLocation();

    const isActiveFunc = (currentPath, intendedPath) => {
        return currentPath.includes(intendedPath);
    };

    return (
        <div className='fixed top-[47px] lg:top-[55px] z-50 bg-black  w-full h-10 overflow-x-auto text-white whitespace-nowrap hide-scrollbar'>
            {links.map((link, index) => (
                <NavLink
                    key={index}
                    to={'/login'}
                    className={`inline-block ${isActiveFunc(location.pathname, link.toLowerCase()) ? 'bg-[#04aa6d] text-white' : 'hover:bg-[#cccccc]'} py-2 px-2`}>
                    {link}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar;
