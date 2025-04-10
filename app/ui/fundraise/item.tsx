import {Person} from "@/app/domain/domain";
import ButtonAction from "@/app/ui/button/action";
import {ProgressFunds} from "@/app/ui/progress/progress_funds";
import {Categories} from "@/app/ui/category/category";
import Image from "next/image";

export default function DonationCard({ client }: { client: Person }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            {/* Изображение */}
            <div className="relative">
                <Image
                    width={600}
                    height={400}
                    src={client.image_url}
                    alt="Пожилой человек"
                    className="w-full h-60 object-cover"
                    unoptimized
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                    📍 {client.city}
                </div>
            </div>

            {/* Контент */}
            <div className="p-4">
                <Categories categories={client.categories} />

                <h3 className="mt-2 text-xl font-bold">{client.name}</h3>
                <p className="text-gray-600 text-sm">Продуктовая корзина</p>

                {/* Прогресс бар */}
                <ProgressFunds from={client.collected} to={client.goal} title='' />

                {/* Кнопка */}
                <ButtonAction text='Помочь' />
            </div>
        </div>
    );
}

