import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";

export default function PaymentModal({ isOpen, onClose }) {
    const [amount, setAmount] = useState(1000);
    const [compensate, setCompensate] = useState(true);
    const [activeTab, setActiveTab] = useState<"subscription" | "one-time">("subscription");

    const [cards, setCards] = useState([
        { id: 1, type: "Mastercard", number: "*4539", selected: false },
        { id: 2, type: "МИР", number: "*8542", selected: true },
    ]);

    const [isAddingCard, setIsAddingCard] = useState(false);
    const [newCard, setNewCard] = useState({ number: "", name: "", cvc: "" });

    const selectCard = (id: number) => {
        setCards(cards.map(card => ({ ...card, selected: card.id === id })));
    };

    const addNewCard = () => {
        if (newCard.number.trim() && newCard.name.trim() && newCard.cvc.trim()) {
            setCards([...cards, { id: Date.now(), type: "Новая карта", number: `*${newCard.number.slice(-4)}`, selected: true }]);
            setNewCard({ number: "", name: "", cvc: "" });
            setIsAddingCard(false);
        }
    };

    const touchStartY = useRef(0);
    const touchMoveY = useRef(0);
    const canClose = useRef(false);
    const modalPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const timeoutId = setTimeout(() => {
            if (!modalPanelRef.current) return;

            const modalPanel = modalPanelRef.current;

            const handleTouchStart = (e: TouchEvent) => {
                touchStartY.current = e.touches[0].clientY;
                touchMoveY.current = e.touches[0].clientY;
                canClose.current = modalPanel.scrollTop === 0;
            };

            const handleTouchMove = (e: TouchEvent) => {
                if (!canClose.current) return;
                touchMoveY.current = e.touches[0].clientY;
                const deltaY = touchMoveY.current - touchStartY.current;

                if (deltaY > 0) {
                    e.preventDefault();
                }
            };

            const handleTouchEnd = () => {
                if (!canClose.current) return;
                const deltaY = touchMoveY.current - touchStartY.current;

                if (deltaY > 100) {
                    onClose();
                }
            };

            modalPanel.addEventListener("touchstart", handleTouchStart);
            modalPanel.addEventListener("touchmove", handleTouchMove, { passive: false });
            modalPanel.addEventListener("touchend", handleTouchEnd);

            return () => {
                modalPanel.removeEventListener("touchstart", handleTouchStart);
                modalPanel.removeEventListener("touchmove", handleTouchMove);
                modalPanel.removeEventListener("touchend", handleTouchEnd);
            };
        }, 100); // Задержка 100 мс

        return () => clearTimeout(timeoutId);
    }, [isOpen, onClose]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-[100] flex flex-col justify-end" onClose={onClose}>
                <div className="fixed inset-0 bg-black/50" onClick={onClose} />
                <Transition.Child
                    as={Fragment}
                    enter="transition transform duration-300"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition transform duration-300"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                >
                    <Dialog.Panel
                        // ref={modalPanelRef}
                        id="modal-panel"
                        className="w-full bg-white rounded-t-2xl shadow-2xl h-[90vh] max-h-[90vh] overflow-y-auto relative z-[101]"
                    >
                        {/* Индикатор для смахивания */}
                        <div
                            className="sticky top-0 left-0 w-full bg-white z-10 pt-4 pb-4"
                            ref={modalPanelRef}
                        >
                            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-2"/>
                            <Dialog.Title className="text-lg font-bold text-center">Продуктовая корзина</Dialog.Title>
                        </div>

                        {/* Динамические табы */}
                        <div className="flex border-b">
                            <button
                                className={`flex-1 py-2 border-b-2 font-semibold transition ${
                                    activeTab === "subscription" ? "border-purple-600 text-purple-600" : "border-transparent text-gray-500"
                                }`}
                                onClick={() => setActiveTab("subscription")}
                            >
                                Подписка
                            </button>
                            <button
                                className={`flex-1 py-2 border-b-2 font-semibold transition ${
                                    activeTab === "one-time" ? "border-purple-600 text-purple-600" : "border-transparent text-gray-500"
                                }`}
                                onClick={() => setActiveTab("one-time")}
                            >
                                Разовый перевод
                            </button>
                        </div>

                        {/* Контейнер с фиксированной высотой и скроллом */}
                        <div className="flex-1 overflow-y-auto mt-4 p-6">
                            {activeTab === "subscription" ? (
                                <div>
                                    <input
                                        type="number"
                                        className="w-full border px-4 py-3 rounded-lg text-lg"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                    <div className="mt-3 flex gap-2">
                                        {[1000, 500, 350].map((val) => (
                                            <button
                                                key={val}
                                                className={`px-4 py-2 rounded-lg ${
                                                    amount === val ? "bg-purple-600 text-white" : "bg-gray-200"
                                                }`}
                                                onClick={() => setAmount(val)}
                                            >
                                                {val} ₸
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-4 bg-gray-100 p-3 rounded-lg">
                                        <p className="flex justify-between">
                                            <span>🛒 Продуктовая корзина</span>
                                            <span>{amount} ₸/мес</span>
                                        </p>
                                        <p className="flex justify-between mt-2">
                                            <span>🌀 Сопровождение (12%)</span>
                                            <span>{Math.round(amount * 0.12)} ₸/мес</span>
                                        </p>
                                    </div>

                                    <div className="mt-4 bg-purple-100 p-3 rounded-lg">
                                        <div className="flex justify-between">
                                            <span>💖 Компенсировать сопровождение</span>
                                            <input
                                                type="checkbox"
                                                className="w-6 h-6"
                                                checked={compensate}
                                                onChange={() => setCompensate(!compensate)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        type="number"
                                        className="w-full border px-4 py-3 rounded-lg text-lg"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                            )}

                            {/* Оплата */}
                            <div className="mt-4">
                                <p className="font-semibold">Способы оплаты</p>
                                <div className="mt-2 flex flex-col gap-2">
                                    {cards.map((card) => (
                                        <button
                                            key={card.id}
                                            className={`border p-3 rounded-lg flex justify-between ${
                                                card.selected ? "border-purple-600" : ""
                                            }`}
                                            onClick={() => selectCard(card.id)}
                                        >
                                            <span>{card.type} {card.number}</span>
                                            {card.selected && <span>✅</span>}
                                        </button>
                                    ))}
                                    {isAddingCard ? (
                                        <div className="p-4 border rounded-lg bg-gray-50 mt-2">
                                            <input
                                                type="text"
                                                className="w-full border p-2 rounded-lg mb-2"
                                                placeholder="Номер карты"
                                                value={newCard.number}
                                                onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                                            />
                                            <input
                                                type="text"
                                                className="w-full border p-2 rounded-lg mb-2"
                                                placeholder="Имя владельца"
                                                value={newCard.name}
                                                onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                                            />
                                            <input
                                                type="text"
                                                className="w-full border p-2 rounded-lg mb-2"
                                                placeholder="CVC"
                                                value={newCard.cvc}
                                                onChange={(e) => setNewCard({...newCard, cvc: e.target.value})}
                                            />
                                            <button
                                                className="w-full bg-purple-600 text-white py-2 rounded-lg"
                                                onClick={addNewCard}
                                            >
                                                Добавить карту
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="border p-3 rounded-lg flex justify-center mt-2"
                                            onClick={() => setIsAddingCard(true)}
                                        >
                                            ➕ Добавить карту
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Кнопка оплаты */}
                        <div className="pl-6 pr-6 pb-10">
                            <button
                                className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg text-lg"
                                onClick={onClose}
                            >
                                {activeTab === "subscription"
                                    ? `Подписаться на ${compensate ? amount + Math.round(amount * 0.12) : amount} ₸/мес`
                                    : `Оплатить ${amount} ₸ разово`}
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}