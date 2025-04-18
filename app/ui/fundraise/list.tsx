import styles from "./client.module.css"
import {Person} from "@/app/domain/domain"
import Link from "next/link"
import DonationCard from "@/app/ui/fundraise/item"
import {listFundraise} from "@/app/lib/actions/fundraise/list"

export default async function FundraiseList() {
    const {data: fundraises} = await listFundraise()

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <ul className={styles.Client_list}>
                {fundraises.map((fund: Person) => (
                    <li key={fund.id}>
                        <Link href={"/fundraise/" + fund.id}>
                            <DonationCard client={fund}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
