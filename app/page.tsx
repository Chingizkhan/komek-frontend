'use client'
import Image from "next/image";
import {removeHandler} from "@/app/lib/actions/actions";
import {useState} from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import {useAuthStore} from "@/app/store/auth";

// <button
//     onClick={removeHandler}
//     className="bg-red-500 p-4 text-white"
// >
//   Delete account
// </button>

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const { user } = useAuthStore()

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Шапка */}
            <header className="bg-white shadow-md p-4 fixed w-full top-0 z-20">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Помощь рядом</h1>

                    {/* Десктопное меню */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-blue-600 transition">Главная</a>
                        <a href="#news" className="hover:text-blue-600 transition">Новости</a>
                        <a href="#people" className="hover:text-blue-600 transition">Люди</a>
                    </nav>

                    {/* Гамбургер меню */}
                    <button onClick={toggleMenu} className="md:hidden text-gray-700">
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Мобильное меню */}
            {menuOpen && <div className="fixed inset-0 bg-black/40 z-30" onClick={toggleMenu}></div>}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: menuOpen ? 0 : "100%", transition: { duration: 0.3 } }}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col p-6"
            >
                <button onClick={toggleMenu} className="self-end text-gray-700">
                    <X size={28} />
                </button>
                <p>{user?.name}</p>
                <nav className="mt-8 flex flex-col space-y-4">
                    <a href="#" className="text-lg font-medium hover:text-blue-600 transition">Главная</a>
                    <a href="#news" className="text-lg font-medium hover:text-blue-600 transition">Новости</a>
                    <a href="#people" className="text-lg font-medium hover:text-blue-600 transition">Люди</a>
                </nav>
            </motion.div>

            {/* Контент */}
            <main className="flex-1 pt-20 max-w-6xl mx-auto p-6">
                {/* Новости */}
                <section id="news" className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Новости</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Новая программа помощи</h3>
                            <p className="text-gray-600 mt-2">Мы запустили новую программу поддержки семей в трудных ситуациях.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Благотворительная акция</h3>
                            <p className="text-gray-600 mt-2">Присоединяйтесь к нашей акции и помогите детям получить образование.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Сбор средств</h3>
                            <p className="text-gray-600 mt-2">Открыт сбор средств на лечение детей с редкими заболеваниями.</p>
                        </div>
                    </div>
                </section>

                {/* Люди для помощи */}
                <section id="people" className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Люди, которым нужна помощь</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person1.jpg" alt="Человек 1" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Анна, 5 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Нужна помощь для оплаты лечения.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person2.jpg" alt="Человек 2" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Иван, 10 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Сбор на операцию по восстановлению зрения.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person3.jpg" alt="Человек 3" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Олег, 7 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Необходимо реабилитационное оборудование.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Футер */}
            <footer className="bg-blue-900 text-white p-6 text-center mt-12 rounded-t-xl">
                <p>© 2025 Помощь рядом. Все права защищены.</p>
            </footer>
        </div>
    );
}
