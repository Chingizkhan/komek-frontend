import Link from "next/link";
import Image from "next/image";

// const Logo = () => (
//     <div className="flex items-center">
//         <Link href="/" className="flex items-center">
//             <svg
//                 className="h-8 w-8 text-blue-600"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             >
//                 <path d="M12 2L2 22h20L12 2z" />
//             </svg>
//             <span className="ml-2 text-xl font-bold text-gray-800">Komek</span>
//         </Link>
//     </div>
// )

const Logo = () => (
    <Image src={"/komek_logo.png" } width={70} height={40} alt={'logo'} />
)

export default Logo;