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

const Logo = ({ width = 130, height = 80 }) => (
    <Image
        src={"/komek_logo_2.png" }
        alt={'logo'}
        width={width}
        height={height}
        // layout={'fill'}
        // objectFit="cover"
    />
)

export const LogoVertical = ({ width = 130, height = 80 }) => (
    <Image
        src={"/komek_logo.png" }
        alt={'logo'}
        width={width}
        height={height}
        // layout={'fill'}
        // objectFit="cover"
    />
)

export default Logo;