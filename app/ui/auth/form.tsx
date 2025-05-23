'use client'

import {ChangeEvent, useState} from "react";
import {formatPhoneInput} from "@/app/utils/phone";
import Logo from "@/app/ui/logo/logo";
import Loader from "@/app/ui/loader/loader";

const Form = ({ title, btnText, addition, action, error, loading }: {title: string, btnText: string, error: string, loading: boolean}) => {
    const [phone, setPhone] = useState('+7')

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhoneInput(e.target.value));
    }

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex items-center justify-center mb-4">
                    <Logo />
                </div>
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <form onSubmit={action}>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Номер телефона</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="+7 (123) 456-78-90"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            placeholder="Введите пароль"
                        />
                    </div>
                    {addition}
                    <p className="mb-4 text-red-500">{error ?? error}</p>
                    <div className="mb-4">
                        {loading ? <Loader /> : null}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        {btnText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form