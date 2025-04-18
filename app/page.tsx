'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Variable } from "lucide-react"
import Image from "next/image"

export default function Home() {
    const Title = ({ children }) => {
        return (
            <div className="flex align-center mb-6">
                <Variable height={17} width={17} />
                <h2 className="text-sm pl-2">{children}</h2>
            </div>
        )
    }

    const Section = ({children, delay = 0, withMotion = false }) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

        if (!withMotion) {
            return <section className="mb-20">{children}</section>
        }

        return <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className="flex items-center justify-center"
        >
            <section className="mb-20">{children}</section>
        </motion.div>
    }

    const Text = ({children}) => {
        return <p className='text-xl'>{children}</p>
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Контент */}
            <main className="flex-1 pt-10 max-w-6xl mx-auto p-6">
                <Section>
                    <Title>НАША МИССИЯ</Title>
                    <Text>Komek — это приложение адресной и прозрачной помощи. Проект, как точка сборки нового времени, объединяющий поколения. Основная категория для оказания адресной помощи — пожилые люди. </Text>
                    <Text>В приложении также можно помогать детям, животным, семьям с одним родителем и пострадавшим в чрезвычайных ситуациях. Главные ценности проекта — любовь, уважение, сострадание, ответственность, прозрачность и технологичность. </Text>
                    <Text>Помогать другим — норма. Помогая другому, ты помогаешь самому себе. Присоединяйся, будь в Komek!</Text>
                </Section>

                <Section>
                    <Title>ПОДОПЕЧНЫЕ</Title>
                    <Text>Данные большинства пожилых подопечных мы получаем от профильных организаций-партнеров. Они координируют все процессы на местах, в том числе подписание документов и проведение фотосессии. Верифицированного подопечного мы повторно проверяем.</Text>
                    <Image
                        src={'https://main-site-production.storage.yandexcloud.net/image_2_10ba9fb300.jpg'}
                        alt='pozhiloi'
                        width={401}
                        height={341}
                        className="rounded-xl mt-4 mb-4"
                        objectFit='cover'
                    />
                </Section>

                <Section withMotion>
                    <Title>ОРГАНИЗАЦИИ-ПАРТНЕРЫ</Title>
                    {/*list*/}
                    <Text>Участвуй в разовых сборах для разных категорий нуждающихся — детей, животных, семей с одним родителем, пострадавших в чрезвычайных ситуациях и пожилых людей.</Text>
                </Section>

                <Section withMotion>
                    <Title>РАЗОВЫЕ СБОРЫ</Title>
                    <Text>Участвуй в разовых сборах для разных категорий нуждающихся — детей, животных, семей с одним родителем, пострадавших в чрезвычайных ситуациях и пожилых людей.</Text>
                    <Image
                        src={'https://main-site-production.storage.yandexcloud.net/R1_08993_033_A_2_20e2b346a0.jpg'}
                        alt='pozhiloi'
                        width={401}
                        height={341}
                        className="rounded-xl mt-4 mb-4"
                        objectFit='cover'
                    />
                    <Text>Заходи в приложение, применяй фильтр для выбора категории и выбирай понравившийся сбор. Делай перевод на удобную сумму и получай прозрачный отчёт после завершения сбора.</Text>
                    {/*image*/}
                    <Image
                        src={'https://main-site-production.storage.yandexcloud.net/R1_08995_019_A_61488401de.jpg'}
                        alt='pozhiloi'
                        width={401}
                        height={341}
                        className="rounded-xl mt-4 mb-4"
                        objectFit='cover'
                    />
                    <Text>Сборы открываются верифицированными благотворительными организациями на разные потребности. Например, если ребенку требуется операция или животным в приюте необходимо закупить корм.</Text>
                </Section>

                <Section withMotion>
                    <Title>ОТЧЕТЫ</Title>
                    <Text>Здесь мы публикуем годовую отчетность и аудиторские заключения о работе фонда. В личном кабинете приложения к каждому платежу пользователя прикрепляется отчет. Расходы на подопечного подтверждаются накладной и фотографией в момент получения помощи. Если пользователь жертвует на развитие проекта, то видит, на что конкретно потрачены его средства.</Text>
                </Section>
            </main>
        </div>
    );
}
