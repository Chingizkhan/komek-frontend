import Image from "next/image";
import Link from "next/link";
import {LINK_LOGIN} from "@/app/consts/links";
import RewardProgress from "@/app/components/reward_progress";

const rewards = [
    {
        title: "Напутствие от Нины Васильевны",
        image: "/images/reward1.jpg",
        progress: 75,
        total: 300,
    },
    {
        title: "Видеоткрытка от Антона Лапенко",
        image: "/images/reward2.jpg",
        progress: 50,
        total: 600,
    },
];

export default function RewardsPage() {
    return (
        <div className="min-h-screen bg-white text-black pb-16">
            {/* Верхний блок */}
            <div className="p-4">
                <p className="text-lg font-bold">Награды</p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
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
                </div>
            </div>

            {/* Топ 10 наград */}
            <div className="mt-6 p-4">
                <p className="text-lg font-semibold">Топ 10 наград</p>
                <div className="flex gap-4 overflow-x-auto mt-3 pb-2">
                    {[
                        {title: "Приглашение на день рождения «ПОМОЩИ»", img: "/flag.jpg"},
                        {title: "Тренировка на льду с Женей Медведевой", img: "/medvedeva.jpg"},
                        {title: "День в Клубе LOOKING", img: "/looking.jpg"},
                    ].map((item, index) => (
                        <div key={index} className="w-40 min-w-[150px] rounded-lg overflow-hidden shadow">
                            <Image src={item.img} alt={item.title} width={150} height={100}/>
                            <p className="p-2 text-sm font-semibold">{item.title}</p>
                        </div>
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
