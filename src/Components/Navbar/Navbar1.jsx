import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from 'react-router-dom';

export default function Navbar1() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>

            <div className="flex justify-between fixed bg-white w-full z-50">
                <div className="flex gap-1 md:gap-2 lg:gap-1 xl:gap-5">
                    <a href="/" className="group">
                        <img className="h-12 m-auto transition duration-300 ease-in-out group-hover:filter group-hover:brightness-75" src="https://www.w3schools.com/images/w3schools_logo_436_2.png" alt="logo" />
                    </a>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex sm:hidden justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white">
                        Menu
                        <AiFillCaretDown style={{ fontSize: 12 }} />
                    </button>

                    {isMobileMenuOpen && (
                        <div className="absolute top-16 left-0 w-full bg-white flex flex-col p-4">
                            <a href="/" className="mb-2">Tutorials</a>
                            <a href="/" className="mb-2">Exercises</a>
                            <a href="/" className="mb-2">Get Certified</a>
                            <a href="/">Services</a>
                        </div>
                    )}

                    <a href="/" className="hidden sm:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d]  hover:text-white">
                        Tutorials
                        <AiFillCaretDown style={{ fontSize: 12 }} />
                    </a>

                    <a href="/" className="hidden sm:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white">
                        Exercises
                        <AiFillCaretDown style={{ fontSize: 12 }} />
                    </a>

                    <a href="/" className="hidden lg:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white">
                        <p>Get Certified</p>
                        <AiFillCaretDown style={{ fontSize: 12 }} />
                    </a>

                    <a href="/" className="hidden md:flex justify-center items-center gap-1 py-3 xl:py-4 px-2 hover:bg-[#04aa6d] hover:text-white">
                        Services
                        <AiFillCaretDown className="gap-10 md:gap-2" style={{ fontSize: 12 }} />
                    </a>

                    <div className="flex items-center justify-center">
                        <div>
                            <input className="hidden text-[12px] min-[850px]:block border-2 py-1 px-4 lg:w-[80%] xl:w-[100%]  text-lg rounded-3xl" type="text" placeholder="Search..." />
                        </div>
                        <div>
                            <BsSearch className="lg:ml-[-75px] md:ml-[-30px] xl:ml-[-25px]" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="hidden xl:flex justify-center items-center gap-1">
                        <BiCodeAlt className="w-5 h-5 text-[#9763f6]" />
                        <span>Spaces</span>
                    </div>
                    <div className="hidden xl:flex justify-center items-center gap-1">
                        <CgShoppingCart className="w-5 h-5 text-[#9763f6]" />
                        <span>Certificates</span>
                    </div>
                    <div className="block min-[600px]:flex bg-[#d9eee1] text-white justify-between w-[70px] min-[600px]:w-[10rem] rounded-full m-2">
                        <div className=" hidden min-[600px]:flex bg-[#04aa6d] rounded-full items-center justify-center h-full w-2/3">
                            <Link to="/signup">Sign Up</Link>
                        </div>
                        <div className="text-black flex items-center justify-center min-[600px]:w-1/2">
                            <Link to={'/login'}> <button>Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}