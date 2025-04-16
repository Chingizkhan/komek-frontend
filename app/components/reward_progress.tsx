'use client'
import { useState } from "react";
import Image from "next/image";

const CircularProgress = ({ value }) => {
    const radius = 24;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <svg width="60" height="60" viewBox="0 0 60 60" className="transform -rotate-90">
            <circle
                cx="30"
                cy="30"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth="6"
                fill="transparent"
            />
            <circle
                cx="30"
                cy="30"
                r={radius}
                stroke="#3B82F6"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
            />
        </svg>
    );
};

const Card = ({ children, className }) => {
    return (
        <div className={`p-4 rounded-xl shadow-md relative bg-white ${className}`}>
            {children}
        </div>
    );
};

const rewards = [
    {
        id: 1,
        title: "Напутствие от Нины Васильевны",
        progress: 300,
        max: 1000,
        image: "/nina.png",
        top100: true,
    },
    {
        id: 2,
        title: "Видеооткрытка от Антона Лапенко",
        progress: 600,
        max: 1000,
        image: "/lapenko.png",
        top100: false,
    },
];

export default function RewardsCard() {
    return (
        <div className="px-4 py-6">
            <h2 className="text-2xl font-semibold mb-4">Карта наград</h2>
            <div className="space-y-4">
                {rewards.map((reward) => (
                    <Card key={reward.id} className="p-4 rounded-xl shadow-md relative flex items-center space-x-4">
                        <div className="relative w-16 h-16">
                            {/*<Image*/}
                            {/*    src={reward.image}*/}
                            {/*    alt={reward.title}*/}
                            {/*    layout="fill"*/}
                            {/*    className="rounded-full"*/}
                            {/*/>*/}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-medium">{reward.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="text-blue-500 font-semibold">{reward.progress}</span>
                                <span className="text-gray-500">/ {reward.max}</span>
                            </div>
                        </div>
                        <CircularProgress value={(reward.progress / reward.max) * 100} />
                        {reward.top100 && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded-md">
                                TOP 100
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
}
