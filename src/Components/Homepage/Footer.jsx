import React from 'react';
import { FaDiscord, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './../../App.css';
export default function Footer() {
    return (
        <>
            <div className="containerFluid w-full sm:">
                <div className="p-[15vh] lg:pb-[40vh] md:m-auto md:pb-[60%] sm:m-auto pb-[140%]">
                    <div className="flex flex-col items-center justify-between text-[15px] gap-3 lg:flex-row  align-center">
                        <div className="w-[20%] h-[10%] lg:w-[50px]  mt-5">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png"
                                className='hover:text-[#fff4a3] h-[80%]' alt='/'
                            />

                        </div>

                        <div className="text-[#fff4a3] font-medium text-[18px] pt-1 lg:text-sm hover:underline underline-offset-7">
                            SPACES
                        </div>
                        <div className="text-[#fff4a3] font-bold text-[18px] pt-1 lg:text-sm hover:underline underline-offset-7">UPGRADE</div>
                        <div className="text-[#fff4a3] font-bold text-[18px] pt-1 lg:text-sm hover:underline underline-offset-7" >
                            NEWSLETTER
                        </div>
                        <div className="text-[#fff4a3] font-bold text-[18px] pt-1 lg:text-sm hover:underline underline-offset-7">
                            GET CERTIFIED
                        </div>
                        <div className="text-[#fff4a3] font-bold text-[18px] pt-1 lg:text-sm hover:underline underline-offset-7">
                            REPORT ERROR
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="lg:grid grid-cols-4 text-sm gap-[10rem]">
                        {/* // top tutorials */}
                        <div className="flex flex-col items-center mt-10 text-[#dddddd] lg:items-start">
                            <div className="font-bold text-[16px]">Top Tutorials</div>
                            <button className="hover:text-[#fff4a3]">
                                <div className="pt-5 text-[12px]">HTML Tutorials</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">CSS Tutorials</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">JavaScript Tutorials</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">React Tutorials</div>
                            </button>
                        </div>

                        {/* // top references*/}
                        <div className="flex flex-col items-center mt-10 text-[#dddddd] lg:items-start">
                            <div className="font-bold text-[16px]">Top References</div>
                            <button className="hover:text-[#fff4a3]">
                                <div className="pt-5 text-[12px]">HTML Reference</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">CSS Reference</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">JavaScript Reference</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">React Reference</div>
                            </button>
                        </div>

                        {/* Top Example */}
                        <div className="flex flex-col items-center mt-10 text-[#dddddd] lg:items-start">
                            <div className="font-bold text-[16px]">Top Examples</div>
                            <button className="hover:text-[#fff4a3]">
                                <div className="pt-5 text-[12px]">HTML Examples</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">CSS Examples</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">JavaScript Examples</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">React Examples</div>
                            </button>
                        </div>

                        {/* Get Cerified */}
                        <div className="flex flex-col items-center mt-10 text-[#dddddd] lg:items-start">
                            <div className="font-bold text-[16px]">Get Certified</div>
                            <button className="hover:text-[#fff4a3]">
                                <div className="pt-5 text-[12px]">HTML Certificate</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">CSS Certificate</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">JavaScript Certificate</div>
                            </button>
                            <button className="hover:text-[#fff4a3]">
                                <div className="text-[12px]">React Certificate</div>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col text-[12px] m-auto pt-[5%] sm:items-center sm:justify-center  lg:w-auto lg:items-start lg:pr-[40%]">
                        <div className="flex text-[#ddd] justify-center items-center gap-4 pt-10 lg:flex-start">
                            <div>
                                <button className="hover:text-[#FFC72C]">
                                    {" "}
                                    <FaFacebookSquare className="w-[17.5px] h-[20px]" />
                                </button>
                            </div>
                            <div>
                                <button className="hover:text-[#FFC72C]">
                                    {" "}
                                    <FaDiscord className="w-[17.5px] h-[20px]" />
                                </button>
                            </div>
                            <div>
                                <button className="hover:text-[#FFC72C]">
                                    {" "}
                                    <FaLinkedin className="w-[17.5px] h-[20px]" />
                                </button>
                            </div>
                            <div>
                                <button className="hover:text-[#FFC72C]">
                                    {" "}
                                    <FaInstagram className="w-[17.5px] h-[20px]" />
                                </button>
                            </div>
                            <div>
                                <button className="hover:text-[#FFC72C] text-[14px] font-bold hover:underline underline-offset-7">
                                    FORUM
                                </button>
                            </div>
                            <div>
                                <button className="hover:text-[#FFC72C] text-[14px] font-bold hover:underline underline-offset-7">
                                    ABOUT
                                </button>
                            </div>
                        </div>
                        <div className="text-[#dddddd] pt-4 text-[10px] leading-14 text-">
                            W3Schools is optimized for learning and training. Examples might
                            be simplified to improve reading and learning. Tutorials,
                            references, and examples are constantly reviewed to avoid errors,
                            but we cannot warrant full correctness of all content. While using
                            W3Schools, you agree to have read and accepted our{" "}
                            <a className="hover:text-[#FFC72C] underline " href='/'>terms of use</a> ,{" "}
                            <a className="hover:text-[#FFC72C] underline" href='/'>
                                cookie and privacy policy
                            </a>
                        </div>
                        <div className="text-[#dddddd] pt-4 text-[12px] leading-14 font-sans text-center lg:text-left">
                            <a className="hover:text-[#FFC72C] underline" href='/'>
                                Copyright 1999-2023
                            </a>{" "}
                            by Refsnes Data. All Rights Reserved.{" "}
                            <a className="hover:text-[#FFC72C] underline" href='/'>
                                W3Schools is Powered by W3.CSS.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}