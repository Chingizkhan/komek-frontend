'use client'

import styles from '@/app/ui/arm/nav_bar/nav_bar.module.css'
import Link from "next/link";
import {LINK_ARM_CAMPAIGNS, LINK_ARM_MERCHANTS} from "@/app/consts/links";
import {usePathname} from "next/navigation";

const navbars = [
    {
        text: 'Мерчанты',
        link: LINK_ARM_MERCHANTS,
    },
    {
        text: 'Рекламные компании',
        link: LINK_ARM_CAMPAIGNS,
    }
]

export default function NavBars() {
    const pathname = usePathname()

    return (
        <ul className={styles.NavBar}>
            {navbars.map((item) => (
                <NavBar item={item} key={item.text} selected={pathname === item.link} />
            ))}
        </ul>
    )
}

function NavBar({ item, selected }: {item:{text: string, link: string }, selected: boolean}) {
    return (
        <li className={`${styles.NavBar_item} ${selected ? styles.selected : ''}`}>
            <Link href={item.link}>
                {item.text}
            </Link>
        </li>
    )
}