'use client'

import Image from "next/image";
import Link from "next/link";
import {LINK_LOGIN} from "@/app/consts/links";
import RewardProgress from "@/app/components/reward_progress";
import {useUser} from "@/app/store/auth";
import {formatPhoneInput} from "@/app/utils/phone";
import AccountBalance from "@/app/ui/account_balance/account_balance";
import Separator from "@/app/ui/separator/separator";

const rewards = [
    {
        title: "Напутствие от Нины Васильевны",
        image: "/images/reward1.jpg",
        progress: 75,
        total: 300,
    },
    // {
    //     title: "Видеоткрытка от Антона Лапенко",
    //     image: "/images/reward2.jpg",
    //     progress: 50,
    //     total: 600,
    // },
];

function Login() {
    return (
        <>
            <div className="flex items-center gap-3">
                <div
                    className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                    🙂
                </div>
                <div>
                    <p className="font-semibold">Гость</p>
                    <p className="text-gray-500 text-sm">Авторизуйся</p>
                </div>
            </div>
            <Link href={LINK_LOGIN} className="bg-black text-white px-4 py-2 rounded-lg">
                Войти
            </Link>
        </>
    )
}

export default function RewardsPage() {
    const user = useUser()

    return (
        <div className="min-h-screen bg-white text-black pb-16">
            {/* Верхний блок */}
            <div className="p-4">
                <p className="text-lg font-bold">Награды</p>

                {
                    user?.id ? (
                        <div className="flex flex-col items-center justify-between mt-3">
                            <div className="flex gap-8">
                                <p className="text-xl ">{user.name}</p>
                                <p className="text-lg ">{formatPhoneInput(user.phone)}</p>
                            </div>
                            <Separator fraction={1} />
                            <AccountBalance account={user.account}/>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between mt-3">
                            <Login/>
                            {/*<Points />*/}
                        </div>
                    )
                }
            </div>

            {/* Топ 10 наград */}
            <div className="mt-6 p-4">
                <p className="text-lg font-semibold">Топ 10 наград</p>
                <div className="flex gap-4 overflow-x-auto mt-3 pb-2">
                    {[
                        {title: "Приглашение на день рождения «KOMEK»"},
                        {title: "Тренировка на льду с Женей Медведевой"},
                        {title: "День в Клубе LOOKING"},
                    ].map((item, index) => (
                        <Reward key={index} title={item.title} />
                    ))}
                </div>
            </div>

            {/* Карта наград */}
            <div className="min-h-screen bg-gray-100 p-4">
                <h2 className="text-lg font-bold mb-4">Карта наград</h2>
                <div className="space-y-4">
                    {rewards.map((reward, index) => (
                        <RewardProgress key={index} {...reward} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const bgColors = [
    "bg-pink-200/60",
    "bg-purple-200/60",
    "bg-blue-200/60",
    "bg-green-200/60",
    "bg-yellow-200/60",
    "bg-orange-200/60",
];

function Reward({title}: { title: string }) {
    const colorClass =
        bgColors[Math.floor(Math.random() * bgColors.length)];

    return (
        <div
            className={`w-[150px] h-[150px] min-w-[150px] rounded-2xl overflow-hidden shadow-md flex items-center justify-center text-center ${colorClass}`}
        >
            <p className="p-2 text-sm font-semibold text-gray-700">{title}</p>
        </div>
        // <div className="w-40 min-w-[150px] rounded-lg overflow-hidden shadow">
        //     {/*<Image src={img} alt={title} width={150} height={100}/>*/}
        //     <p className="p-2 text-sm font-semibold">{title}</p>
        // </div>
    )
}