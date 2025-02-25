// import { clients } from "@/app/ui/client/list";
// import { Client } from "@/app/domain/domain"
// import styles from "./client_info.module.css"
//
// export default async function ClientInfo({ id }: { id: string }) {
//     const client = await fetchClientInfo(id)
//
//     if (!client) {
//         throw new Error("Client not found");
//     }
//
//     return (
//         <div className={styles.ClientInfo}>
//             <h1>{client.name}</h1>
//             <p>Почта: {client.email}</p>
//             <p>Телефон: {client.phone}</p>
//         </div>
//     )
// }
//
// async function fetchClientInfo(id: string) : Promise<Client | undefined>  {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(clients.find(client => client.id === id))
//         }, 700)
//     });
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PaymentModal from "@/app/components/payment_modal";

interface Person {
    id: string;
    name: string;
    age: number;
    city: string;
    category: string;
    goal: number;
    collected: number;
    address: string;
    helpers: string[];
    description: string;
    circumstances: string;
    image: string;
}

const people = [
    {
        id: "1",
        name: "Татьяна Георгиевна",
        age: 60,
        address: "Москва, ул. Ленина, д. 10",
        lifeDescription: "Жил обычной жизнью, работал инженером...",
        circumstances: "Потерял работу из-за болезни, нуждается в поддержке.",
        city: "Алматы",
        category: "Пожилые",
        goal: 3500,
        collected: 2500,
        image: "/images/tatyana.jpg",
        helpers: ["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg"],
        description: "Татьяна Георгиевна живет в однокомнатной квартире и нуждается в помощи.",
    },
    {
        id: "2",
        name: "Мария Смирнова",
        age: 42,
        address: "Санкт-Петербург, Невский пр., д. 25",
        lifeDescription: "Работала учителем, воспитывала двоих детей...",
        circumstances: "После пожара осталась без жилья и нуждается в помощи.",
        image: "/images/maria.jpg",
    },
];

async function fetchClientInfo(id: string) : Promise<Person | undefined>  {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(people.find(client => client.id === id))
        }, 700)
    });
}

export default function ClientInfo() {
    const { id } = useParams();
    const [person, setPerson] = useState<Person | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchPerson() {
            // Имитация загрузки данных (замени на реальный API-запрос)
            const response = await fetchClientInfo(id);
            // const data = await response.json();
            setPerson(response);
        }
        fetchPerson();
    }, [id]);

    if (!person) return <p className="text-center mt-10 text-gray-500">Загрузка...</p>;

    return (
        <div className="max-w-lg mx-auto p-4 md:max-w-3xl">
            {/* Картинка */}
            <div className="relative">
                <Image
                    src={person.image}
                    alt={person.name}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg"
                />
            </div>

            {/* Информация */}
            <div className="bg-white shadow-lg rounded-xl p-6 -mt-10 relative z-10">
                <h1 className="text-2xl font-bold text-gray-800">{person.name}</h1>

                {/* Прогресс сбора */}
                <div className="mt-6">
                    <p className="text-gray-700 font-semibold">Продуктовая корзина</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                        <div
                            className="bg-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${(person.collected / person.goal) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        {person.collected.toLocaleString()} ₽ из {person.goal.toLocaleString()} ₽
                    </p>
                </div>

                {/* Кнопка "Помочь" */}
                <button
                    className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg font-semibold"
                    onClick={() => setIsModalOpen(true)}
                >
                    Помочь
                </button>
            </div>

            {/* Модальное окно */}
            <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}