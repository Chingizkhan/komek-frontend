'use client'

import Link from "next/link";
import {LINK_FUNDRAISES, LINK_MAIN, LINK_NEWS, LINK_PROFILE} from "@/app/consts/links"
import Logo from "@/app/ui/logo/logo";
import {useUser} from "@/app/store/auth";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Menu, X} from "lucide-react";
import {
    Home,
    HeartHandshake,
    Newspaper,
    User,
} from "lucide-react";
import UserButton from "@/app/ui/authorized_button/authorized_button";

// const Header = () => {
//     return (
//         <header className="bg-white shadow-md">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Логотип слева */}
//                     <Logo />
//
//                     {/* Значок аккаунта справа */}
//                     <Link href={LINK_PROFILE} className="flex items-center">
//                         <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                             <svg
//                                 className="h-6 w-6 text-gray-800"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                 />
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     );
// };

const menuItems = [
    { label: "Главная", icon: Home, link: LINK_MAIN },
    { label: "Сборы", icon: HeartHandshake, link: LINK_FUNDRAISES },
    { label: "Новости", icon: Newspaper, link: LINK_NEWS },
    { label: "Профиль", icon: User, link: LINK_PROFILE },
];

const Sidebar = ({onClick}: {onClick: () => void}) => {
    return (
        <div className="w-[260px] h-screen bg-white border-r py-6 flex flex-col gap-6">
            {/*<div className="text-xl font-bold text-sky-500 px-2">💙 DonateHub</div>*/}

            <nav className="flex flex-col">
                {menuItems.map(({ label, icon: Icon, link }) => (
                    <Link
                        onClick={onClick}
                        key={label}
                        className="flex items-center gap-4 text-base text-gray-800 font-medium hover:bg-gray-100 transition px-6 py-4 rounded-lg"
                        href={link}
                    >
                        <Icon size={22} />
                        <span>{label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const user = useUser()
    useEffect(() => {

    }, [user])

    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Логотип слева */}
                        <Logo/>

                        <button onClick={toggleMenu} className="md:hidden text-gray-700">
                            <Menu size={28}/>
                        </button>
                    </div>
                </div>
            </header>
            {/* Мобильное меню */}
            {menuOpen && <div className="fixed inset-0 bg-black/40 z-30" onClick={toggleMenu}></div>}
            <motion.div
                initial={{x: "100%"}}
                animate={{x: menuOpen ? 0 : "100%", transition: {duration: 0.3}}}
                className="fixed top-0 right-0 h-full w-64 bg-white rounded-l-lg shadow-lg z-40 flex flex-col"
            >
                <button onClick={toggleMenu} className="self-end text-gray-700 p-6">
                    <X size={28}/>
                </button>
                <UserButton onClick={toggleMenu} />
                <Sidebar onClick={toggleMenu} />

            </motion.div>
        </>
    );
};



export default Header
