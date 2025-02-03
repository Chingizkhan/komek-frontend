import styles from './merchant.module.css'
import { Merchant } from '@/app/domain/domain'
import Link from "next/link";

export default function MerchantList({ merchants }: { merchants: Merchant[] }) {
    return (
        <ul className={styles.Merchant_list}>
            {merchants.map((merchant: Merchant) => (
                <MerchantItem merchant={merchant} key={merchant.id} />
            ))}
        </ul>
    )
}

export function MerchantItem({ merchant }: { merchant: Merchant }) {
    return (
        <Link
            className={styles.Merchant}
            href={`/arm/merchants/${merchant.id}`}
        >
            {merchant.name}
        </Link>
    )
}