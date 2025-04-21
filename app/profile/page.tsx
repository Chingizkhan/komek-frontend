'use client'

import RewardProgress from "@/app/components/reward_progress";
import {useUser} from "@/app/store/auth";
import AccountBalance from "@/app/ui/account_balance/account_balance";
import UserButton from "@/app/ui/authorized_button/authorized_button";
import TransactionList from "@/app/ui/profile/transaction_list/transaction_list";

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

export default function RewardsPage() {
    const user = useUser()

    return (
        <div className="min-h-screen bg-white text-black pb-16">
            {/* Верхний блок */}
            <div className="p-4">
                <p className="text-lg font-bold mt-3">Аккаунт</p>
                {/*<div className="flex flex-col items-center justify-between mt-3">*/}
                {/*    <AccountBalance account={user?.account}/>*/}
                {/*</div>*/}

                {
                    user?.id ? (
                        <div className="flex flex-col items-center justify-between mt-6">
                            {/*<div className="flex gap-8">*/}
                                {/*<p className="text-xl ">{user.name}</p>*/}
                                {/*<p className="text-lg ">{formatPhoneInput(user.phone)}</p>*/}
                            {/*</div>*/}
                            {/*<Separator fraction={1} />*/}
                            <AccountBalance account={user.account}/>
                            <TransactionList accountID={user.account.id} />
                        </div>
                    ) : (
                        <UserButton onClick={() => {}} />
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