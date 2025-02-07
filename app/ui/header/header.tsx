import styles from '@/app/ui/header/header.module.css'
import Link from "next/link";
import { LINK_PROFILE } from "@/app/consts/links"
import Logo from "@/app/ui/logo/logo";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Логотип слева */}
                    <Logo />

                    {/* Значок аккаунта справа */}
                    <Link href={LINK_PROFILE} className="flex items-center">
                        <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <svg
                                className="h-6 w-6 text-gray-800"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header
