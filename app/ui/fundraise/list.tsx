import styles from "./client.module.css"
import {Person} from "@/app/domain/domain";
import Link from "next/link";
import DonationCard from "@/app/ui/fundraise/item";
import {listFundraise} from "@/app/lib/actions";

export const people: Person[] = [
    {
        id: "0",
        name: "Волосатый көт",
        age: 42,
        address: "Санкт-Петербург, Невский пр., д. 25",
        description: "Работала учителем, воспитывала двоих детей...",
        circumstances: "После пожара осталась без жилья и нуждается в помощи.",
        image: '/kot.png',
        phone: "",
        email: "",
        city: "Алматы",
        goal: 2000,
        collected: 1015,
        helpers: [],
        categories: ['💳 Ежемесячный сбор', '👵 Животные']
    },
    {
        id: "1",
        name: "Талас (обычный көт)",
        age: 60,
        address: "Москва, ул. Ленина, д. 10",
        circumstances: "Потерял работу из-за болезни, нуждается в поддержке.",
        city: "Костанай",
        goal: 3500,
        collected: 2500,
        image: "/talas.png",
        helpers: ["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg"],
        description: "Татьяна Георгиевна живет в однокомнатной квартире и нуждается в помощи.",
        phone: "87058113795",
        email: "talas@mail.ru",
        categories: ['💳 Ежемесячный сбор', '👵 Пожилые']
    },
];

// async function fetchClients() : Promise<Person[]> {
//     const { data, error } = await listClients()
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     return new Promise(resolve => resolve(people))
// }

export default async function FundraiseList() {
    const { data: fundraises } = await listFundraise()

    return (
        <div className="bg-gray-100 min-h-screen p-4">

            <ul className={styles.Client_list}>
                {fundraises.map((fund: Person) => (
                    <li key={fund.id}>
                        <Link href={"/fundraise/" + fund.id}>
                            <DonationCard client={fund}/>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Tabs */}
            {/*<div className="flex space-x-2 p-4 bg-white sticky top-0 z-10">*/}
            {/*    <button className={selectedTab === "help" ? "bg-black text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"} onClick={() => setSelectedTab("help")}>Ждут помощи</button>*/}
            {/*    <button className={selectedTab === "elderly" ? "bg-black text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"} onClick={() => setSelectedTab("elderly")}>👵 Пожилые</button>*/}
            {/*    <button className={selectedTab === "children" ? "bg-black text-white px-4 py-2 rounded" : "bg-gray-200 px-4 py-2 rounded"} onClick={() => setSelectedTab("children")}>🧸 Дети</button>*/}
            {/*</div>*/}

            {/* Donation Card */}
            {/* Bottom Navigation */}
            {/*<nav className="fixed bottom-0 w-full bg-white shadow flex justify-around p-2">*/}
            {/*    <button className="flex flex-col items-center text-gray-600">📋<span className="text-xs">Меню</span></button>*/}
            {/*    <button className="flex flex-col items-center text-gray-600">💳<span className="text-xs">Платежи</span></button>*/}
            {/*    <button className="flex flex-col items-center text-blue-600">🤝<span className="text-xs">Помощь</span></button>*/}
            {/*    <button className="flex flex-col items-center text-gray-600">📄<span className="text-xs">Дело</span></button>*/}
            {/*    <button className="flex flex-col items-center text-gray-600">🏆<span className="text-xs">Награды</span></button>*/}
            {/*</nav>*/}
        </div>
    );
}
