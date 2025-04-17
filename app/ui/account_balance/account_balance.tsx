import { motion } from "framer-motion";
import {Account} from "@/app/domain/domain";

// const AccountBalance = ({ account }: { account: Account }) => {
//     const { balance, country, currency } = account;
//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="flex justify-center items-center"
//         >
//             <div className="w-[300px] p-4 shadow-md rounded-lg bg-white text-center border border-gray-200">
//                 <h2 className="text-xl font-bold text-gray-700">Баланс</h2>
//                 <div className="my-4">
//                     <motion.span
//                         className="text-3xl font-extrabold text-gray-800"
//                         animate={{ scale: [1, 1.05, 1] }}
//                         transition={{ repeat: Infinity, duration: 2 }}
//                     >
//                         {balance.toLocaleString()} {currency}
//                     </motion.span>
//                 </div>
//                 <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-300">
//           {country}
//         </span>
//             </div>
//         </motion.div>
//     );
// };
//
// export default AccountBalance;

const AccountBalance = ({ account }: { account: Account }) => {
    if (!account) return <div></div>
    const { balance, currency } = account;

    const formattedBalance = new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(balance);

    // Допустим, процент роста фиксированный (можешь сделать пропсом)
    const growthPercentage = 12.76;

    return (
        <div className="w-[320px] h-[140px] rounded-2xl bg-gradient-to-br from-white to-zinc-100 p-4 shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <span className="text-sm text-gray-500 font-medium">Баланс</span>
                <div className="bg-green-200/80 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 font-medium">
                    {/*<ArrowUpRight size={14} />*/}
                    {growthPercentage}%
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <p className="text-3xl font-semibold text-gray-900 tracking-tight">
                        {formattedBalance}
                    </p>
                    <span className="text-xl text-gray-500 font-big">
                        {currency}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AccountBalance;