'use client'

import {useEffect, useState} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {getDonations} from "@/app/lib/actions/transaction/get_list";

type Transaction = {
    id: string
    from_account_id: string
    to_account_id: string
    to_account_name: string
    amount: number
    created_at: string // ISO string
}

type Props = {
    accountID: string
}

export default function TransactionList({ accountID }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [transactionList, setTransactionList] = useState([])

    useEffect(() => {
        async function getTransactions() {
            const { data, error } = await getDonations()
            setTransactionList(data)
        }
        getTransactions()
    }, [])

    // Группировка по дате
    const grouped = transactionList.reduce((acc, tx) => {
        const date = new Date(tx.created_at).toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        if (!acc[date]) acc[date] = []
        acc[date].push(tx)
        return acc
    }, {} as Record<string, Transaction[]>)

    const sortedDates = Object.keys(grouped).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
    )

    return (
        <div className="p-4 mt-4 bg-white rounded-2xl shadow-sm w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center font-medium text-lg"
            >
                <span>История транзакций</span>
                <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-6"
                    >
                        {sortedDates.map(date => (
                            <div key={date}>
                                <div className="text-sm text-gray-400 mb-2">{date}</div>
                                <div className="space-y-3">
                                    {grouped[date].map(tx => {
                                        const isOutgoing = tx.from_account_id === accountID
                                        const amount = `${isOutgoing ? "-" : "+"}${tx.amount.toLocaleString()} ₸`
                                        const amountClass = isOutgoing ? "text-red-500" : "text-green-600"

                                        return (
                                            <motion.div
                                                key={tx.id}
                                                className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-sm shadow"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div>
                                                    <div className="font-semibold">{tx.to_account_name}</div>
                                                    <div className="text-xs text-gray-500">
                                                        {new Date(tx.created_at).toLocaleTimeString("ru-RU", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })}
                                                    </div>
                                                </div>
                                                <div className={`font-bold ${amountClass}`}>{amount}</div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
