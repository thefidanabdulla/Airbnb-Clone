import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiGlobe, BiMenu } from "react-icons/bi";
import { HiUserCircle } from 'react-icons/hi'

const Header = () => {
    return (
        <header className="sticky top-0 left-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src='https://links.papareact.com/qd3'
                    fill
                    className="object-contain object-left"
                    alt="logo"
                />
            </div>
            <div className="flex items-center justify-between md:border-2 rounded-full p-2 md:shadow-sm">
                <input 
                    type='text' 
                    placeholder="Start your search" 
                    className="border-none outline-none w-full bg-transparent"
                />
                <div className="hidden md:inline-flex bg-red-400 text-white text-sm p-2 rounded-full">
                    <BsSearch />
                </div>
            </div>
            <div className="flex gap-4 justify-end items-center text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <BiGlobe className="cursor-pointer" />
                <div className="text-2xl flex gap-2 border-2 p-2 cursor-pointer rounded-full">
                    <BiMenu />
                    <HiUserCircle />
                </div>
            </div>
        </header>
    )
}

export default Header