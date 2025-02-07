import Logo from "@/app/ui/logo/logo";

const Footer = () => {
    return (
        <footer className="bg-white shadow-md py-4">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
                <Logo />
                <div className="mt-4 md:mt-0">
                    <nav className="flex space-x-4 text-gray-500">
                        <a href="#about" className="hover:underline">О нас</a>
                        <a href="#services" className="hover:underline">Услуги</a>
                        <a href="#contact" className="hover:underline">Контакты</a>
                    </nav>
                </div>
            </div>
            <div className="text-center mt-4 text-gray-400">
                <p className="text-sm">© {new Date().getFullYear()} komek. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;