"use client";

import { motion } from "framer-motion";
import { Person } from "@/app/domain/domain";
import Link from "next/link";
import DonationCard from "@/app/ui/fundraise/item";

export default function FundraiseClientList({ fundraises }: { fundraises: Person[] }) {
    return (
        <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {fundraises.map((fund: Person) => (
                <li key={fund.id}>
                    <Link href={"/fundraise/" + fund.id}>
                        <DonationCard client={fund} />
                    </Link>
                </li>
            ))}
        </motion.ul>
    );
}