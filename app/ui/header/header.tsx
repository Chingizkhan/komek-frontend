import styles from '@/app/ui/header/header.module.css'
import Link from "next/link";
import { LINK_PROFILE } from "@/app/consts/links";

export default function Header() {
    return (
        <header className={styles.Header}>
            <p>HEADER</p>
            <Profile />
        </header>
    )
}

function Profile() {
    return (
        <div className={styles.Header_profile}>
            <Link
                className={styles.Header_profile_button}
                href={LINK_PROFILE}
            >
                profile
            </Link>
        </div>
    )
}