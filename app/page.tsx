export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Контент */}
            <main className="flex-1 pt-10 max-w-6xl mx-auto p-6">
                <h2>Наша миссия</h2>
                {/* Новости */}
                <section id="news" className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Новости</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Новая программа помощи</h3>
                            <p className="text-gray-600 mt-2">Мы запустили новую программу поддержки семей в трудных ситуациях.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Благотворительная акция</h3>
                            <p className="text-gray-600 mt-2">Присоединяйтесь к нашей акции и помогите детям получить образование.</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold">Сбор средств</h3>
                            <p className="text-gray-600 mt-2">Открыт сбор средств на лечение детей с редкими заболеваниями.</p>
                        </div>
                    </div>
                </section>

                {/* Люди для помощи */}
                <section id="people" className="mb-12">
                    <h2 className="text-3xl font-semibold text-blue-700 mb-6">Люди, которым нужна помощь</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person1.jpg" alt="Человек 1" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Анна, 5 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Нужна помощь для оплаты лечения.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person2.jpg" alt="Человек 2" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Иван, 10 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Сбор на операцию по восстановлению зрения.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src="/person3.jpg" alt="Человек 3" className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-xl font-semibold">Олег, 7 лет</h3>
                            <p className="text-gray-600 mt-2 text-center">Необходимо реабилитационное оборудование.</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Помочь</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Футер */}
            <footer className="bg-blue-900 text-white p-6 text-center mt-12 rounded-t-xl">
                <p>© 2025 Помощь рядом. Все права защищены.</p>
            </footer>
        </div>
    );
}
