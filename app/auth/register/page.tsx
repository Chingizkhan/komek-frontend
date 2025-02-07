import Link from "next/link";
import { LINK_LOGIN } from "@/app/consts/links";
import Logo from "@/app/ui/logo/logo";

export default function Page() {
    return (
        <div>
            <RegistrationForm />
        </div>
    )
}

const RegistrationForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <div className="flex items-center justify-center mb-4">
                    <Logo />
                </div>
                <h2 className="text-lg font-semibold mb-4">Регистрация</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Номер телефона</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="+7 (123) 456-78-90"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};