'use client'

import {useUser} from "@/app/store/auth";
import {formatPhoneInput} from "@/app/utils/phone";
import Link from "next/link";
import {LINK_LOGIN} from "@/app/consts/links";

function UserButton({ onClick }: { onClick: () => void }) {
    const user = useUser();

    return (
        <>
            {user?.id ? (
                <div className="flex flex-col items-center justify-between">
                    <div className="flex gap-8">
                        {
                            user.name ? (
                                <p className="text-xl text-blue-500">{user.name}</p>
                            ) : (
                                <p className="text-xl text-blue-500">{formatPhoneInput(user.phone)}</p>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 p-6 w-full">
                    <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                            🙂
                        </div>
                        <div>
                            <p className="font-semibold">Гость</p>
                            <p className="text-gray-500 text-sm">Авторизуйся</p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 pt-4">
                        <Login onClick={onClick} />
                    </div>
                </div>
            )}
        </>
    );
}

function Login({onClick}: {
    onClick: () => void
}) {
    return (
        <>
            <Link onClick={onClick} href={LINK_LOGIN} className="bg-black text-white px-4 py-2 rounded-lg">
                Войти
            </Link>
        </>
    )
}

export default UserButton