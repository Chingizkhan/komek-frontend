import NavBars from "@/app/ui/arm/nav_bar/nav_bar";
import { ReactNode } from "react"
import styles from "@/app/arm/arm.module.css"

export default function Layout({ children }: {children: ReactNode}) {
    return (
        <div className={styles.Layout}>
            <NavBars />
            <section className={styles.Layout_Content}>
                {children}
            </section>
        </div>
    )
}