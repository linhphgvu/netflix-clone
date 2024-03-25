import React from "react";
import NavbarItem from "./NavbarItem";
import AccountMenuDD from "./AccountMenuDD";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="w-full z-40">

            <div className="px-4 py-6 md:px-16 flex flex-row items-center transition duration-500 bg-opacity-90" >
                <img className="h-4 lg:h-7" src="/logo.svg" alt="logo" loading="lazy" />
                <div className="flex-grow ml-8 gap-7 lg:flex hidden">
                    <NavbarItem label="Home" />
                    <NavbarItem label="TV show" />
                    <NavbarItem label="Movie" />
                    <NavbarItem label="My List" />

                </div>
                <div className="lg:hidden flex flex-grow items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className="text-white transition " />
                </div>

                <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsBell />
                </div>
                <div className="flex flex-grow items-center cursor-pointer gap-2 relative">
                    <div className="w-8 h-8 rounded-md overflow-hidden">
                        <img src="/profilephoto.svg" alt="profile" />
                    </div>
                    
                    <BsChevronDown className="text-white transition " />
                    <AccountMenuDD/>
                    
                </div>
            </div>

            </div>

            

        </nav>
    )
}

export default Navbar;

