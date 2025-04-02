import { motion } from "framer-motion";
import {Account} from "@/app/domain/domain";

const AccountBalance = ({ account }: { account: Account }) => {
    const { balance, country, currency } = account;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
        >
            <div className="w-[300px] p-4 shadow-md rounded-lg bg-white text-center border border-gray-200">
                <h2 className="text-xl font-bold text-gray-700">Баланс</h2>
                <div className="my-4">
                    <motion.span
                        className="text-3xl font-extrabold text-gray-800"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        {balance.toLocaleString()} {currency}
                    </motion.span>
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium border border-gray-300">
          {country}
        </span>
            </div>
        </motion.div>
    );
};

export default AccountBalance;
