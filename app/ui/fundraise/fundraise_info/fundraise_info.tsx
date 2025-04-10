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
import {Person} from "@/app/domain/domain";
import {people} from "@/app/ui/fundraise/list";
import {ProgressFunds} from "@/app/ui/progress/progress_funds";
import ButtonAction from "@/app/ui/button/action";
import {Categories} from "@/app/ui/category/category";
import Separator from "@/app/ui/separator/separator";
import {getFundraise} from "@/app/lib/actions";

async function fetchClientInfo(id: string) : Promise<Person | undefined>  {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(people.find(client => client.id === id))
        }, 700)
    });
}

export default function FundraiseInfo() {
    const { id } = useParams();
    const [fundraise, setFundraise] = useState<Person | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchPerson() {
            const { data } = await getFundraise(id);
            const client = {
                ...data,
            }
            setFundraise(client);
        }
        fetchPerson();
    }, [id]);

    if (!fundraise) return <p className="text-center mt-10 text-gray-500">Загрузка...</p>;

    return (
        <div className="max-w-md mx-auto md:max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Картинка */}
            {/*<div className="relative w-full h-80">*/}
            {/*    <Image*/}
            {/*        src={person.image}*/}
            {/*        alt={person.name}*/}
            {/*        layout="fill"*/}
            {/*        objectFit="cover"*/}
            {/*        className="rounded-t-xl"*/}
            {/*        unoptimized*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="relative">
                <Image
                    src={fundraise.image_url}
                    alt={fundraise.name}
                    width={600}
                    height={400}
                    // layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl w-full h-120 object-cover rounded-lg"
                    unoptimized
                />
            </div>

            {/* Информация */}
            <div className="p-6 relative -mt-6 bg-white rounded-t-3xl shadow-md">
                <h1 className="text-2xl font-bold text-gray-900 text-center">{fundraise.name}</h1>

                <Categories categories={[...fundraise.categories, fundraise.city]}/>

                <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                    📍 {fundraise.city}
                </div>

                {/* Прогресс сбора */}
                <ProgressFunds from={fundraise.collected} to={fundraise.goal} title="Продуктовая корзина"/>

                {/* Количество людей, которые помогают */}
                <Supporters quantity={fundraise.supporters_quantity}/>
                <Separator fraction={0.5} />
                <Description desc={fundraise.description} />

                {/* Кнопка "Помочь" */}
                <div className="mt-6">
                    <ButtonAction text="Помочь" onClick={() => setIsModalOpen(true)} className="w-full py-3 text-lg"/>
                </div>
            </div>

            {/* Модальное окно */}
            <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    );
}

function Supporters({quantity}: { quantity: number }) {
    return (
        <div className="bg-gray-100 p-3 rounded-lg mt-4 text-gray-700">
            <p className="text-sm">Уже помогают</p>
            <p className="text-lg font-bold">{quantity} человек</p>
        </div>
    )
}

function Description({ desc }: { desc: string }) {
    return (
        <div>
            <h2 className="text-black font-bold mb-1 text-base">О подопечном</h2>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
    )
}